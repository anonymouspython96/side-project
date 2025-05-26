<template>
  <div class="about-container">
    <section class="hero-about-section">
      <div class="hero-image-wrapper">
        <img src="../../public/Emi.jpg" alt="Emilian Timofei Profile Picture" class="profile-picture">
      </div>
      <div class="hero-content">
        <p class="hero-intro">{{ translations.about.introPhrase }}</p>
        <h1 class="page-title">{{ translations.about.title }}</h1>
        <p class="page-description">{{ translations.about.description }}</p>
      </div>
    </section>

    <section class="mission-section">
      <h2 class="section-heading">{{ translations.about.missionTitle }}</h2>
      <p class="section-text">{{ translations.about.missionDescription }}</p>
      <p class="section-text large-text">{{ translations.about.visionStatement }}</p>
    </section>

    <section class="values-section">
      <h2 class="section-heading">{{ translations.about.valuesTitle }}</h2>
      <div class="values-grid">
        <div class="value-item">
          <i class="fas fa-handshake value-icon"></i>
          <h3 v-html="translations.about.valueReliabilityTitle"></h3>
          <p>{{ translations.about.valueReliabilityDescription }}</p>
        </div>
        <div class="value-item">
          <i class="fas fa-eye value-icon"></i>
          <h3 v-html="translations.about.valueDetailTitle"></h3>
          <p>{{ translations.about.valueDetailDescription }}</p>
        </div>
        <div class="value-item">
          <i class="fas fa-check-circle value-icon"></i>
          <h3 v-html="translations.about.valueCompletenessTitle"></h3>
          <p>{{ translations.about.valueCompletenessDescription }}</p>
        </div>
      </div>
    </section>

    <section class="approach-section">
      <h2 class="section-heading">{{ translations.about.approachTitle }}</h2>
      <p class="section-text">{{ translations.about.approachDescription }}</p>
      <p class="language-info">{{ translations.about.languageSpecific }}</p>
    </section>

    <section class="cta-section">
      <h2 class="section-heading">{{ translations.about.ctaTitle }}</h2>
      <router-link to="/contact" class="btn btn-primary">{{ translations.about.ctaButton }}</router-link>
    </section>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useLanguageStore } from '@/stores/language';
import itTranslations from '@/translations/it';
import enTranslations from '@/translations/en';

export default {
  name: 'AboutView',
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
        console.log('AboutView: Traduzioni aggiornate per lingua:', newLang);
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
/* Il CSS non ha bisogno di modifiche e rimane come nella versione precedente che hai fornito. */
/* Copia qui tutto il tuo <style> esistente da AboutView.vue */
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--color-background-light);
  color: var(--color-text-dark);

  @media (max-width: 767px) {
    padding: 15px;
  }
  @media (max-width: 480px) {
    padding: 10px;
  }
}

/* Base styles for sections */
section {
  padding: 60px 0;
  text-align: center;
  margin-bottom: 40px;
  border-radius: 10px;
  background-color: white; // Ogni sezione ha il suo sfondo bianco
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 900px) {
    padding: 50px 0;
    margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    padding: 40px 0;
    margin-bottom: 25px;
  }
  @media (max-width: 480px) {
    padding: 30px 0;
    margin-bottom: 20px;
  }
}

.section-heading {
  font-size: 2.5em;
  color: var(--color-text-dark);
  margin-bottom: 25px;
  font-weight: 700;

  @media (max-width: 900px) {
    font-size: 2em;
    margin-bottom: 20px;
  }
  @media (max-width: 767px) {
    font-size: 1.8em;
    margin-bottom: 18px;
  }
  @media (max-width: 480px) {
    font-size: 1.6em;
    margin-bottom: 15px;
  }
}

.section-text {
  font-size: 1.1em;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto 20px auto;
  color: var(--color-text-dark);

  @media (max-width: 767px) {
    font-size: 1em;
    margin-bottom: 15px;
  }
  @media (max-width: 480px) {
    font-size: 0.95em;
    margin-bottom: 12px;
  }
}

.large-text {
  font-size: 1.4em;
  font-weight: 500;
  color: var(--color-accent-blue);
  margin-top: 30px;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    font-size: 1.2em;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 480px) {
    font-size: 1.1em;
    margin-top: 15px;
    margin-bottom: 15px;
  }
}

/* Hero About Section */
.hero-about-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 80px 20px;
  background-color: var(--color-background-light); // Sfondo diverso per la sezione iniziale
  box-shadow: none; // Nessuna ombra per la hero section

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    padding: 60px 40px;
    .hero-content {
      flex: 2;
      padding-right: 40px;
    }
    .hero-image-wrapper {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
  @media (max-width: 767px) {
    padding: 40px 15px;
    gap: 30px;
  }
  @media (max-width: 480px) {
    padding: 30px 10px;
    gap: 20px;
  }
}

.hero-image-wrapper {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; // Impedisce che si rimpicciolisca troppo in spazi stretti

  @media (min-width: 768px) {
    width: 350px;
    height: 350px;
  }
  @media (max-width: 767px) {
    width: 220px;
    height: 220px;
  }
  @media (max-width: 480px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 380px) {
    width: 150px;
    height: 150px;
  }
}

.profile-picture {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Assicura che l'immagine copra interamente il cerchio */
  display: block; /* Rimuove lo spazio extra sotto l'immagine */
}

.hero-intro {
  font-size: 1.3em;
  color: var(--color-accent-blue);
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    font-size: 1.1em;
  }
  @media (max-width: 480px) {
    font-size: 1em;
  }
}

.page-title {
  font-size: 3.5em;
  color: var(--color-text-dark);
  margin-bottom: 15px;
  line-height: 1.1;
  font-weight: 800;

  @media (max-width: 1024px) {
    font-size: 3em;
  }
  @media (max-width: 900px) {
    font-size: 2.5em;
  }
  @media (max-width: 767px) {
    font-size: 2em;
  }
  @media (max-width: 480px) {
    font-size: 1.8em;
    margin-bottom: 10px;
  }
}

.page-description {
  font-size: 1.2em;
  line-height: 1.7;
  color: var(--color-text-dark);
  margin-bottom: 20px;

  @media (max-width: 767px) {
    font-size: 1.1em;
  }
  @media (max-width: 480px) {
    font-size: 1em;
  }
}

/* Values Section */
.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 767px) {
    gap: 20px;
  }
  @media (max-width: 480px) {
    padding: 0 10px;
  }
}

.value-item {
  background-color: var(--color-background-light);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center; // Centra orizzontalmente gli elementi all'interno della card
  text-align: center;  // Centra il testo
  box-sizing: border-box;


  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  }

  h3 {
    font-size: 1.5em;
    color: var(--color-accent-blue);
    margin-bottom: 10px;
    font-weight: 600;

    @media (max-width: 767px) {
      font-size: 1.3em;
    }
  }

  p {
    font-size: 0.95em;
    color: #666;
    line-height: 1.6;
    margin-top: 0;

    @media (max-width: 767px) {
      font-size: 0.9em;
    }
  }
}

.value-icon {
  font-size: 3em;
  color: var(--color-accent-blue);
  margin-bottom: 20px;

  @media (max-width: 767px) {
    font-size: 2.5em;
    margin-bottom: 15px;
  }
}

/* Approach Section */
.approach-section {
  .language-info {
    font-style: italic;
    color: var(--color-accent-blue); // Metti in risalto il colore per l'info lingua
    font-size: 1em;
    margin-top: 30px;
    border-top: 1px solid var(--color-neutral-light);
    padding-top: 20px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 480px) {
      font-size: 0.9em;
      margin-top: 20px;
      padding-top: 15px;
    }
  }
}

/* Call to Action Section */
.cta-section {
  background-color: var(--color-accent-blue); // Sfondo accentuato per la CTA
  color: white;
  padding: 80px 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);

  .section-heading {
    color: white; // Il titolo deve essere bianco su sfondo blu
  }

  .btn {
    background-color: white;
    color: var(--color-accent-blue);
    border: 2px solid white;
    &:hover {
      background-color: var(--color-background-light-dark); // un grigio chiaro per l'hover
      color: var(--color-accent-blue-dark);
      border-color: var(--color-background-light-dark);
    }
  }

  @media (max-width: 900px) {
    padding: 60px 20px;
  }
  @media (max-width: 767px) {
    padding: 40px 15px;
  }
  @media (max-width: 480px) {
    padding: 30px 10px;
  }
}

/* General button styles (copied from HomeView for consistency) */
.btn {
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.1s ease;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 767px) {
    padding: 12px 25px;
    font-size: 1em;
  }
  @media (max-width: 480px) {
    padding: 10px 18px;
    font-size: 0.9em;
  }
  @media (max-width: 380px) {
    padding: 8px 15px;
    font-size: 0.85em;
  }
}

.btn-primary {
  background-color: var(--color-accent-blue);
  color: white;
  border: 2px solid var(--color-accent-blue);
  &:hover {
    background-color: var(--color-accent-blue-dark);
    transform: translateY(-2px);
  }
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-accent-blue);
  border: 2px solid var(--color-accent-blue);
  &:hover {
    background-color: var(--color-accent-blue);
    color: white;
    transform: translateY(-2px);
  }
}
</style>