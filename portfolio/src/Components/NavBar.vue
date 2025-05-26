<template>
  <nav class="navbar">
    <div class="logo-section">
      <img src="../../public/coding.svg" alt="logo">
      <span>Emilian Timofei</span>
    </div>
    <div class="nav-links">
      <router-link to="/" class="nav-link">{{ translations.navbar.home }}</router-link>
      <router-link to="/about" class="nav-link">{{ translations.navbar.about }}</router-link>
      <router-link to="/contact" class="nav-link">{{ translations.navbar.contact }}</router-link>
    </div>
    <div class="nav-controls">
      <LanguageButton />
    </div>
  </nav>
</template>

<script>
import { ref, watch } from 'vue';
// PERCORSO CORRETTO per LanguageButton
import LanguageButton from './ComponentsOfComponents/LanguageButton.vue';
import { useLanguageStore } from '@/stores/language';
import itTranslations from '@/translations/it';
import enTranslations from '@/translations/en';

export default {
  name: 'NavBar',
  components: {
    LanguageButton,
  },
  setup() {
    const languageStore = useLanguageStore();
    const translations = ref({});

    const getTranslationsForCurrentLang = (lang) => {
      return lang === 'it' ? itTranslations : enTranslations;
    };

    watch(
      () => languageStore.currentLanguage,
      (newLang) => {
        translations.value = getTranslationsForCurrentLang(newLang);
        console.log('NavBar: Traduzioni aggiornate per lingua:', newLang, translations.value.navbar);
      },
      {
        immediate: true
      }
    );

    return {
      languageStore,
      translations,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 25px;
  background-color: var(--navbar-bg-color, #2c3e50);
  color: var(--navbar-text-color, white);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;

  .logo-section {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    img {
      height: 3rem;
      border-radius: 0.75rem;
    }
    span {
      color: black;
    }
  }


  .nav-links {
    display: flex;
    gap: 25px;
  }

  /* Stili per router-link */
  .nav-link {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: var(--navbar-hover-color, #1abc9c);
    }

    /* Stile per il link attivo (opzionale, ma comune con vue-router) */
    &.router-link-exact-active {
      color: var(--navbar-hover-color, #1abc9c);
      /* Colore diverso per la pagina attiva */
      text-decoration: underline;
    }
  }

  .nav-controls {
    // Spazio per il bottone, se necessario
  }
}
</style>