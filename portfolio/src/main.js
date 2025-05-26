// src/main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router'; // <-- Importa il router

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router); // <-- Usa il router
app.mount('#app');