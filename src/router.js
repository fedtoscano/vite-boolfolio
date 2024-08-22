import { createMemoryHistory, createRouter } from 'vue-router'
import ProjectList from './pages/ProjectList.vue';


const routes = [
    { path: '/projects', component: ProjectList },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;