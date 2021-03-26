import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const _axios = axios.create();

_axios.interceptors.request.use(
  function (config) {
    return config;
  },

  function (error){
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  function (config) {
    return config;
  },

  function (error){
    return Promise.reject(error);
  }
);

export default _axios;