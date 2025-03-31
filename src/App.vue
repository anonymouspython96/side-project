<template>
  <div id="app">
    <Navbar />
    <!-- Navbar visibile su tutte le pagine -->
    <router-view />
    <!-- Qui verranno caricate le varie views, Home, About, Services, Contacts -->
    <Footer v-if="$route.path !== '/contacts'" />
  </div>
</template>

<script>
import "./assets/main.css";
import Navbar from "./views/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped></style>
