import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CV from '@/views/CV.vue';
import CL from '../views/CL.vue';
import Contacts from '../views/Contacts.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/cv', component: CV },
  { path: '/cl', component: CL },
  { path: '/contacts', component: Contacts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
