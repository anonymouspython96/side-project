<template>
    <div class="home-container">
        <section class="hero-section">
            <div class="hero-content">
                <p class="hero-intro">{{ translations.home.heroIntro }}</p>
                <h1 class="hero-title" v-html="translations.home.heroTitle"></h1>
                <p class="hero-subtitle">{{ translations.home.heroSubtitle }}</p>
                <div class="hero-cta">
                    <router-link to="/contact" class="btn btn-primary">{{ translations.home.contactCta }}</router-link>
                    <a href="#services" class="btn btn-secondary">{{ translations.home.servicesCta }}</a>
                </div>
            </div>
            <div class="hero-image-placeholder">
                <i class="fas fa-code hero-icon"></i>
                <div class="hero-pulse-effect"></div>
            </div>
        </section>

        <section id="services" class="services-section">
            <h2 class="section-title">{{ translations.home.servicesTitle }}</h2>
            <p class="section-description">{{ translations.home.servicesDescription }}</p>
            <div class="service-cards">
                <div class="service-card">
                    <i class="fas fa-blog service-icon"></i>
                    <h3>{{ translations.home.blogTitle }}</h3>
                    <p>{{ translations.home.blogDescription }}</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-briefcase service-icon"></i>
                    <h3>{{ translations.home.portfolioTitle }}</h3>
                    <p>{{ translations.home.portfolioDescription }}</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-bullhorn service-icon"></i>
                    <h3>{{ translations.home.landingPageTitle }}</h3>
                    <p>{{ translations.home.landingPageDescription }}</p>
                </div>
            </div>
        </section>

        <section class="value-prop-section">
            <h2 class="section-title">{{ translations.home.valuePropTitle }}</h2>
            <p class="section-description">{{ translations.home.valuePropDescription }}</p>
            <router-link to="/about" class="btn btn-secondary">{{ translations.home.learnMoreCta }}</router-link>
        </section>
    </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useLanguageStore } from '@/stores/language';
import itTranslations from '@/translations/it';
import enTranslations from '@/translations/en';

export default {
    name: 'HomeView',
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
                console.log('HomeView: Traduzioni aggiornate per lingua:', newLang);
            },
            { immediate: true }
        );

        onMounted(() => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const navbarHeight = document.querySelector('.navbar').offsetHeight;
                        const offsetPosition = targetElement.offsetTop - navbarHeight - 20;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                    }
                });
            });
        });

        return {
            translations,
        };
    },
};
</script>

<style lang="scss" scoped>
/* Variabili CSS di base definite in App.vue */

// Keyframes per l'animazione di pulsazione
@keyframes pulse-round {
    0% {
        transform: scale(0.8);
        opacity: 0.7;
    }

    70% {
        transform: scale(1.1);
        opacity: 0;
    }

    100% {
        transform: scale(0.8);
        opacity: 0.7;
    }
}

.home-container {
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

/* Stili per le Sezioni */
section {
    padding: 80px 0;
    text-align: center;

    @media (max-width: 900px) {
        padding: 60px 0;
    }

    @media (max-width: 767px) {
        padding: 40px 0;
    }

    @media (max-width: 480px) {
        padding: 30px 0;
    }
}

.section-title {
    font-size: 2.8em;
    color: var(--color-text-dark);
    margin-bottom: 20px;
    font-weight: 700;

    @media (max-width: 900px) {
        font-size: 2.2em;
    }

    @media (max-width: 767px) {
        font-size: 1.8em;
    }

    @media (max-width: 480px) {
        font-size: 1.6em;
    }
}

.section-description {
    font-size: 1.2em;
    color: var(--color-text-dark);
    margin-bottom: 40px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;

    @media (max-width: 900px) {
        font-size: 1.1em;
        margin-bottom: 30px;
    }

    @media (max-width: 767px) {
        font-size: 1em;
        margin-bottom: 25px;
    }

    @media (max-width: 480px) {
        font-size: 0.9em;
        margin-bottom: 20px;
    }
}

/* Hero Section */
.hero-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    text-align: center;
    padding: 80px 20px;
    background-color: var(--color-background-light);
    gap: 40px;

    @media (min-width: 768px) {
        flex-direction: row;
        text-align: left;
        min-height: 70vh;

        .hero-content {
            flex: 1;
            padding-right: 40px;
            text-align: left;
        }

        .hero-image-placeholder {
            flex: 1; // Permette di occupare lo spazio disponibile
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media (max-width: 900px) {
        padding: 60px 20px;
        gap: 30px;
    }

    @media (max-width: 767px) {
        padding: 40px 15px;
        gap: 25px;
        min-height: 70vh;
    }

    @media (max-width: 480px) {
        padding: 30px 10px;
        gap: 20px;
        min-height: 60vh;
    }

    @media (max-width: 380px) {
        padding: 20px 10px;
        gap: 15px;
        min-height: 50vh;
    }
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

.hero-title {
    font-size: 4em;
    color: var(--color-text-dark);
    margin-bottom: 20px;
    line-height: 1.1;
    font-weight: 800;
    white-space: pre-line;

    @media (max-width: 1024px) {
        font-size: 3.5em;
    }

    @media (max-width: 900px) {
        font-size: 3em;
    }

    @media (max-width: 767px) {
        font-size: 2.5em;
    }

    @media (max-width: 480px) {
        font-size: 2em;
        margin-bottom: 15px;
    }

    @media (max-width: 380px) {
        font-size: 1.8em;
        line-height: 1.2;
    }

    span {
        color: var(--color-accent-blue);
    }
}

.hero-subtitle {
    font-size: 1.6em;
    color: var(--color-text-dark);
    margin-bottom: 40px;
    font-weight: 300;

    @media (max-width: 1024px) {
        font-size: 1.4em;
    }

    @media (max-width: 900px) {
        font-size: 1.2em;
    }

    @media (max-width: 767px) {
        font-size: 1.1em;
        margin-bottom: 30px;
    }

    @media (max-width: 480px) {
        font-size: 1em;
        margin-bottom: 25px;
    }

    @media (max-width: 380px) {
        font-size: 0.9em;
        margin-bottom: 20px;
    }
}

.hero-cta {
  display: flex;
  gap: 20px;
  // justify-content: center; // Rimosso o modificato per il default, gestito dal media query
  flex-wrap: wrap; // Permette ai bottoni di andare a capo

  @media (min-width: 768px) {
    justify-content: flex-start; // Allinea a sinistra su desktop/tablet
  }

  @media (max-width: 480px) {
    flex-direction: column; // Imposta la direzione in colonna su schermi piccoli
    align-items: center; // Centra orizzontalmente gli elementi in colonna
    gap: 10px;

    .btn {
      width: 60%; // Mantieni la larghezza per i bottoni in colonna
    }
  }

  @media (max-width: 380px) {
    gap: 8px;
  }
}

.hero-image-placeholder {
    /* Mantieni le dimensioni per il layout flexbox, ma ora aggiungiamo aspect-ratio */
    width: 250px; // Larghezza base per il mobile-first
    aspect-ratio: 1 / 1;
    /* Forza un rapporto d'aspetto 1:1 (quadrato), renderà il cerchio perfetto */
    background-color: var(--color-neutral-light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    position: relative;
    overflow: hidden;

    @media (min-width: 768px) {
        width: 350px;
    }

    @media (max-width: 767px) {
        width: 200px;
    }

    @media (max-width: 480px) {
        width: 180px;
    }

    @media (max-width: 380px) {
        width: 160px;
    }
}

.hero-icon {
    font-size: 10em;
    color: var(--color-accent-blue);
    position: relative;
    z-index: 2;

    @media (max-width: 767px) {
        font-size: 8em;
    }

    @media (max-width: 480px) {
        font-size: 7em;
    }

    @media (max-width: 380px) {
        font-size: 6em;
    }
}

/* Elemento per l'effetto pulsante rotondo */
.hero-pulse-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(var(--color-accent-blue-rgb), 0.7);
    animation: pulse-round 2s infinite;
    z-index: 1;
}

/* Buttons (Stili riutilizzabili per tutti i bottoni) */
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

/* Services Section */
.services-section {
    background-color: var(--color-background-light);
}

.service-cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
}

.service-card {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    h3 {
        font-size: 1.8em;
        color: var(--color-text-dark);
        margin-bottom: 15px;

        @media (max-width: 767px) {
            font-size: 1.5em;
        }

        @media (max-width: 480px) {
            font-size: 1.3em;
        }
    }

    p {
        font-size: 1em;
        color: #666;
        line-height: 1.6;

        @media (max-width: 767px) {
            font-size: 0.9em;
        }

        @media (max-width: 480px) {
            font-size: 0.85em;
        }
    }
}

.service-icon {
    font-size: 3.5em;
    color: var(--color-accent-blue);
    margin-bottom: 20px;

    @media (max-width: 767px) {
        font-size: 3em;
    }

    @media (max-width: 480px) {
        font-size: 2.5em;
    }
}

/* Value Proposition Section */
.value-prop-section {
    background-color: var(--color-background-light);
    padding: 80px 20px;

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
</style>