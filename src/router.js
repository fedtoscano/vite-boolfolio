import { createRouter, createWebHistory } from 'vue-router'
import ProjectList from './pages/ProjectList.vue';
import AppBlog from './pages/AppBlog.vue';
import AppAbout from './pages/AppAbout.vue';
import AppSingleProject from './pages/AppSingleProject.vue';


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
    {
        path: '/projects/:id', 
        name: 'single-project', 
        component: AppSingleProject 
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export {router};