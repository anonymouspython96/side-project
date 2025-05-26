// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue'; // Usa l'alias @ per src/
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    }
];

const router = createRouter({
    history: createWebHistory(), // Usa la history mode (URL puliti senza #)
    routes
});

export default router;