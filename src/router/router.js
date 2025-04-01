import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Curriculum from '../views/Curriculum.vue';
import CoverLetter from '../views/CoverLetter.vue';
import Contacts from '../views/Contacts.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/cv', component: Curriculum },
  { path: '/cl', component: CoverLetter },
  { path: '/contacts', component: Contacts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
