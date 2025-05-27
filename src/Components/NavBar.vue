<template>
  <nav class="navbar">
    <div class="nav-toggle-wrapper">
      <button class="hamburger" @click="toggleMobileMenu" aria-label="Toggle navigation menu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>

    <div class="nav-links" :class="{ 'nav-links--open': isMobileMenuOpen }">
      <router-link to="/" class="nav-link" @click="closeMobileMenu">{{ translations.navbar.home }}</router-link>
      <router-link to="/about" class="nav-link" @click="closeMobileMenu">{{ translations.navbar.about }}</router-link>
      <router-link to="/contact" class="nav-link" @click="closeMobileMenu">{{ translations.navbar.contact }}</router-link>
    </div>

    <div class="nav-controls">
      <span><strong>Lang:</strong></span>
      <LanguageButton />
    </div>
  </nav>
</template>

<script>
import { ref, watch, onMounted, onUnmounted } from 'vue';
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
    const isMobileMenuOpen = ref(false);

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

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
      // Impedisce lo scroll del body quando il menu è aperto
      if (isMobileMenuOpen.value) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false;
      document.body.style.overflow = ''; // Reimposta lo scroll del body
    };

    const handleResize = () => {
      if (window.innerWidth > 900) {
        isMobileMenuOpen.value = false;
        document.body.style.overflow = ''; // Reimposta lo scroll del body
      }
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = ''; // Assicurati di resettare in caso di navigazione fuori dal componente
    });

    return {
      languageStore,
      translations,
      isMobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  border-bottom: var(--color-accent-blue-dark);
  color: var(--navbar-text-color);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 15px; // Riduci il padding per schermi super piccoli
  }

  .nav-toggle-wrapper {
    display: none;

    @media (max-width: 900px) {
      display: block;
      order: 1;
      min-width: 30px; // Assicurati che abbia una larghezza minima per essere cliccabile
    }
  }

  .nav-links {
    display: flex;
    gap: 25px;
    flex-grow: 1;
    justify-content: center;
    order: 2;

    @media (max-width: 900px) {
      flex-direction: column;
      background-color: var(--navbar-bg-color);
      position: fixed; // Usa fixed per coprire l'intera viewport
      top: 0; // Parti dall'alto della viewport
      left: 0;
      width: 100vw; // Intera larghezza della viewport
      height: 100vh; // Intera altezza della viewport
      transform: translateY(-100%);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.3s ease-out, opacity 0.3s ease-out;
      overflow-y: auto; // Permetti lo scroll all'interno del menu se il contenuto è troppo lungo
      padding: 80px 20px 20px; // Aggiungi padding superiore per non sovrapporsi alla navbar fissa
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      justify-content: flex-start; // Allinea i link in alto al menu
      align-items: center; // Centra i link orizzontalmente

      &--open {
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
      }

      .nav-link {
        padding: 15px 25px; // Padding aumentato per facilitare il tocco
        text-align: center;
        width: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }

  .nav-link {
    color: var(--color-accent-blue);
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease, border-bottom 0.3s ease;
    padding-bottom: 5px;
    position: relative;

    &:hover {
      color: var(--navbar-hover-color);
    }

    &.router-link-exact-active {
      color: var(--navbar-hover-color);
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: var(--navbar-hover-color);
        transform: scaleX(1);
        transform-origin: bottom left;
        transition: transform 0.3s ease;
      }
    }

    &:not(.router-link-exact-active)::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: var(--navbar-hover-color);
        transform: scaleX(0);
        transform-origin: bottom left;
        transition: transform 0.3s ease;
    }
    &:not(.router-link-exact-active):hover::after {
        transform: scaleX(1);
    }
  }

  .nav-controls {
    display: flex;
    align-items: center;
    gap: 15px;
    order: 3;

    span {
      color: var(--color-accent-blue);
    }
  }

  .hamburger {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    width: 30px;
    height: 20px; // Altezza sufficiente per tutte e 3 le linee
    position: relative;
    z-index: 1001; // Deve essere sopra il menu espandibile

    display: flex;
    flex-direction: column;
    justify-content: space-between; // Spazia le linee verticalmente

    &-line {
      display: block;
      width: 100%;
      height: 2px;
      background-color: var(--color-accent-blue);;
      transition: all 0.3s ease;
    }
  }
}
</style>