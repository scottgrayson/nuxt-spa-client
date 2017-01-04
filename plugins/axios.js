import axios from 'axios'

axios.defaults.baseURL = 'http://api.laravel-spa-api.dev/v1/'

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (localStorage.authorization) {
    config.headers['Authorization'] = 'Bearer ' + localStorage.authorization
  }
  return config
})
