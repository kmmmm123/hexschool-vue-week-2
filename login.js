import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
  data() {
    return {
      userItem: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const apiUrl = 'https://vue3-course-api.hexschool.io/v2/admin/signin';
      axios
        .post(apiUrl, this.userItem)
        .then((response) => {
          const { token, expired } = response.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;
          window.location = 'products.html';
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
}).mount('#app');
