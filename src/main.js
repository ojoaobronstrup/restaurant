import { createApp } from 'vue'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: HomePage },
    { path: '/oi', component: <h1>oi</h1> }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
