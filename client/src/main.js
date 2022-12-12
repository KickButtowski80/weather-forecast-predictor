import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '../router/router.js'
import BaseCard from './components/UI/BaseCard.vue'



const app = createApp(App)
app.use(router)
app.component('base-card', BaseCard)
app.mount('#app')
