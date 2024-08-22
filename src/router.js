import { createRouter, createWebHistory } from 'vue-router'
import ProjectList from './pages/ProjectList.vue';
import AppBlog from './pages/AppBlog.vue';
import AppAbout from './pages/AppAbout.vue';


const routes = [
    {
        path: '/Blog', 
        name: 'blog',
        component: AppBlog
    },
    {
        path: '/projects', 
        name: 'projects', 
        component: ProjectList 
    },
    {
        path: '/about', 
        name: 'about', 
        component: AppAbout 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export {router};