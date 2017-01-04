import axios from 'axios'

// more setup in ~/plugins/axios

export default {
  login (username, password) {
    return axios.post('/auth/login', { username, password })
  },

  register (registration) {
    return axios.post('/auth/login', { registration })
  },

  socialAuthRedirect (provider) {
    axios.get('/auth/' + provider)
      .then((res) => {
        if (res.data.token_url) {
          window.location = res.data.token_url
        } else {
          // TODO find a better way to handle this. go to error page?
          console.log('error no redirect url')
        }
      })
      .catch((error) => {
        // TODO find a better way to handle this. go to error page?
        console.log(error)
      })
  },

  loginWithSocial (code, provider) {
    return axios.post('/auth/' + provider, { code })
  },

  logout () {
    return axios.post('/auth/logout')
  },

  currentUser () {
    return axios.get('auth/user')
  }
}
