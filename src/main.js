import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router'
import axios  from 'axios';
 axios.defaults.baseURL = 'http://127.0.0.1:8000'
createApp(App).use(router, axios).mount('#app')

