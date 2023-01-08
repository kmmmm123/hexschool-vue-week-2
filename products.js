import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
  data() {
    return {
      apiUrl: 'https://vue3-course-api.hexschool.io/v2',
      apiPath: 'jimlin_vue',
      products: [],
      tempProduct: {},
    };
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const url = `${this.apiUrl}/api/user/check`;
      axios
        .post(url)
        .then((response) => {
          this.getData();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getData() {
      const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
      axios
        .get(url)
        .then((response) => {
          this.products = response.data.products;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    lookUpProduct(item) {
      this.tempProduct = item;
    },
  },
}).mount('#app');
