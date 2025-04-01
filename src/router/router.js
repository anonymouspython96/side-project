import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cv from '../views/CV.vue';
import Cl from '../views/CL.vue';
import Contacts from '../views/Contacts.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/cv', component: Cv },
  { path: '/cl', component: Cl },
  { path: '/contacts', component: Contacts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
