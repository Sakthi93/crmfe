import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Axios global defaults
axios.defaults.baseURL = 'http://localhost:8000/api/'  // change if needed

// Set auth token if it exists
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

app.use(createPinia())
app.use(router)

app.config.globalProperties.$axios = axios // optional: access via this.$axios

app.mount('#app')
