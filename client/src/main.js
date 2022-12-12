import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import BaseCard from './components/UI/BaseCard.vue'


const app = createApp(App)
app.use(VueRouter)
app.component('base-card', BaseCard)
app.mount('#app')
