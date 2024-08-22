import { createApp } from 'vue';
import 'bootstrap/scss/bootstrap.scss';
import App from './App.vue';

import { router } from './router.js'

createApp(App).use(router).mount('#app');
