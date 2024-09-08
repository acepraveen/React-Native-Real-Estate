import appAxios from 'axios';

const axios = appAxios.create({
  baseURL: 'https://dummyjson.com/',
  timeout: 10000,
  headers: {'Content-Type': 'application/json'},
});


export default axios;
