<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './Components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
/* Stili globali per l'intera app, comprese le variabili CSS */
:root {
  /* Nuove Variabili CSS per la palette "Clean & Professional" */
  --color-background-light: #F7FAFC; /* Sfondo generale chiaro */
  --color-text-dark: #2D3748;        /* Testo principale scuro */
  --color-accent-blue: #007BFF;      /* Blu per pulsanti, link */
  --color-neutral-light: #CBD5E0;    /* Grigio chiaro per bordi, separatori */
  --color-success-green: #28A745;    /* Verde per stati di successo (opzionale) */
  --color-warning-yellow: #FFC107;   /* Giallo per avvisi (opzionale) */

  /* NUOVE VARIABILI DERIVATE con Sass per poi essere usate nel CSS */
  --color-accent-blue-dark: #0069D9; // Calcolato: darken(#007BFF, 10%)
  --color-background-light-dark: #E8EBEF; // Calcolato: darken(#F7FAFC, 5%)
  // *** Modifica qui: aggiunta o conferma di questa variabile RGB ***
  --color-accent-blue-rgb: 0, 123, 255; // RGB equivalent of #007BFF per le animazioni
  // ***************************************************************

  /* Variabili per componenti specifici che ora useranno la nuova palette */
  --button-border-color: var(--color-neutral-light);
  --button-bg-color: var(--color-background-light);
  --button-text-color: var(--color-text-dark);
  --button-active-bg-color: var(--color-accent-blue);
  --button-active-border-color: var(--color-accent-blue);
  --button-active-text-color: white;
  --button-hover-bg-color: var(--color-background-light-dark); // Usa la nuova variabile per hover light
  --button-hover-border-color: var(--color-accent-blue);

  --navbar-bg-color: var(--color-text-dark);
  --navbar-text-color: var(--color-background-light);
  --navbar-hover-color: var(--color-accent-blue);

  --main-content-bg: var(--color-background-light);
  --main-content-text: var(--color-text-dark);
}

html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Previene lo scroll orizzontale */
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-background-light);
  color: var(--color-text-dark);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>