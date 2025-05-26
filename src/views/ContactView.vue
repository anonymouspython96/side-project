<template>
  <div class="contact-container">
    <div class="page-content">
      <h2 class="page-title">{{ translations.contact.title }}</h2>
      <p class="page-description">{{ translations.contact.description }}</p>

      <div class="social-buttons">
        <a href="https://www.linkedin.com/in/timofeiemilian96/" target="_blank" rel="noopener noreferrer" class="btn social-btn linkedin">
          <i class="fab fa-linkedin"></i> {{ translations.contact.linkedinButton }}
        </a>
        <a href="https://wa.me/+393508324707" target="_blank" rel="noopener noreferrer" class="btn social-btn whatsapp">
          <i class="fab fa-whatsapp"></i> {{ translations.contact.whatsappButton }}
        </a>
        <a href="https://github.com/anonymouspython96" target="_blank" rel="noopener noreferrer" class="btn social-btn github">
          <i class="fab fa-github"></i> {{ translations.contact.githubButton }}
        </a>
        <a href="mailto:timofeiemilian9000@gmail.com" class="btn social-btn email">
          <i class="fas fa-envelope"></i> {{ translations.contact.emailButton }}
        </a>
      </div>

      <p class="language-info">{{ translations.contact.languageSpecific }}</p>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useLanguageStore } from '@/stores/language';
import itTranslations from '@/translations/it';
import enTranslations from '@/translations/en';

export default {
  name: 'ContactView',
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
        console.log('ContactView: Traduzioni aggiornate per lingua:', newLang);
      },
      { immediate: true }
    );

    return {
      translations,
    };
  },
};
</script>

<style lang="scss" scoped>
.contact-container {
  display: flex;
  justify-content: center; // Centra orizzontalmente
  align-items: center;    // Centra verticalmente
  min-height: calc(100vh - var(--navbar-height, 60px) - var(--footer-height, 0px)); // Adatta l'altezza
  padding: 20px;
  background-color: var(--color-background-light); // Usa una variabile globale se definita
  color: var(--color-text-dark); // Usa una variabile globale
  box-sizing: border-box; // Assicura che padding non aggiunga larghezza/altezza
}

.page-content {
  max-width: 800px; // Larghezza massima per il contenuto
  width: 100%; // Occupa tutta la larghezza disponibile fino a max-width
  padding: 40px; // Padding più generoso
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08); // Ombra più marcata
  text-align: center; // Centra il testo
  margin: 0; // Rimuovi il margin predefinito, gestito dal contact-container

  @media (max-width: 767px) {
    padding: 30px;
  }
  @media (max-width: 480px) {
    padding: 20px;
  }
}

.page-title {
  font-size: 2.8em; // Titolo più grande
  color: var(--color-accent-blue); // Usa il colore accentuato
  margin-bottom: 20px;
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 2.2em;
  }
  @media (max-width: 480px) {
    font-size: 1.8em;
  }
}

.page-description {
  font-size: 1.2em;
  line-height: 1.7;
  margin-bottom: 30px; // Spazio maggiore prima dei bottoni
  color: var(--color-text-dark);

  @media (max-width: 767px) {
    font-size: 1.1em;
    margin-bottom: 25px;
  }
  @media (max-width: 480px) {
    font-size: 1em;
    margin-bottom: 20px;
  }
}

.social-buttons {
  display: flex;
  flex-wrap: wrap; // Permette ai bottoni di andare a capo su schermi piccoli
  justify-content: center; // Centra i bottoni
  gap: 20px; // Spazio tra i bottoni
  margin-bottom: 40px; // Spazio dopo i bottoni

  @media (max-width: 767px) {
    gap: 15px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 25px;
  }
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 25px;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // Ombra per i bottoni

  i {
    margin-right: 10px; // Spazio tra icona e testo
    font-size: 1.2em; // Dimensione icona
    align-self: center;
  }

  &:hover {
    transform: translateY(-3px); // Effetto "sollevamento" al passaggio del mouse
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  // Stili specifici per ogni bottone
  &.linkedin {
    background-color: #0077B5;
    color: white;
    &:hover {
      background-color: #005f93;
    }
  }

  &.whatsapp {
    background-color: #25D366;
    color: white;
    &:hover {
      background-color: #1DA851;
    }
  }

  &.github {
    background-color: #333;
    color: white;
    &:hover {
      background-color: #1a1a1a;
    }
  }

  &.email {
    background-color: var(--color-accent-blue); // Usa il colore principale del tema
    color: white;
    &:hover {
      background-color: var(--color-accent-blue-dark);
    }
  }

  @media (max-width: 767px) {
    width: calc(50% - 15px); // Due bottoni per riga su schermi medi
    padding: 12px 20px;
    font-size: 1em;
    i {
      margin-right: 8px;
    }
  }
  @media (max-width: 480px) {
    width: 100%; // Un bottone per riga su schermi piccoli
    padding: 10px 15px;
    font-size: 0.95em;
    i {
      margin-right: 5px;
    }
  }
}

.language-info {
  font-style: italic;
  color: var(--color-accent-blue); // Allinea lo stile con l'AboutView
  font-size: 1em;
  margin-top: 20px;
  border-top: 1px solid var(--color-neutral-light);
  padding-top: 15px;

  @media (max-width: 480px) {
    font-size: 0.9em;
    margin-top: 15px;
    padding-top: 10px;
  }
}
</style>