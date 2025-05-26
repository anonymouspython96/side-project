<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
// Non è più necessario importare 'ref' e 'watch' o i file di traduzione qui,
// perché le singole View si occupano delle proprie traduzioni.
import NavBar from './Components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  setup() {
    // Non è più necessario lo store della lingua o le traduzioni qui,
    // perché le singole View si occupano delle proprie traduzioni.
    // L'unica cosa che App.vue deve fare è fornire il router-view.

    // Rimuoviamo i console.log di debug e le variabili non più necessarie qui
    return {};
  },
};
</script>

<style lang="scss">
/* Stili globali per l'intera app, comprese le variabili CSS */
:root {
  /* Variabili CSS per temi e stili */
  --button-border-color: #a0a0a0;
  --button-bg-color: #f5f5f5;
  --button-text-color: #444;
  --button-active-bg-color: #007bff;
  --button-active-border-color: #0056b3;
  --button-active-text-color: white;
  --button-hover-bg-color: #e0e0e0;
  --button-hover-border-color: #808080;

  --navbar-bg-color: #2c3e50;
  --navbar-text-color: white;
  --navbar-hover-color: #1abc9c;

  --main-content-bg: #f9f9f9;
  --main-content-text: #34495e;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f0f2f5;
  color: #333;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Rimuovi gli stili specifici di .main-content se ora sono nei singoli view */
/* Se vuoi che tutte le pagine abbiano gli stessi margini/ombra, potresti lasciarli qui
   o applicarli alla classe comune .page-content come fatto negli esempi delle View. */
</style>