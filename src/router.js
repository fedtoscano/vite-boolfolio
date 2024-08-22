import { createMemoryHistory, createRouter } from 'vue-router'
import AppAbout from './components/AppAbout.vue'


const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AppAbout},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})