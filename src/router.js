import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Painel from './components/PanelDashboard.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/painel/salas', component: Painel }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;