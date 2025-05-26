<template>
    <div class="page-content">
        <h2 class="page-title">{{ translations.content.welcome }}</h2>
        <p class="page-description">{{ translations.content.description }}</p>
        <p class="language-info">{{ translations.content.languageInfo }}</p>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
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

        return {
            translations,
        };
    },
};
</script>

<style lang="scss" scoped>
.page-content {
    padding: 30px;
    background-color: var(--main-content-bg);
    color: var(--main-content-text);
    margin: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05); // Mantieni la leggera ombra
}

.page-title {
    font-size: 2.2em;
    color: #2c3e50;
    margin-bottom: 15px;
}

.page-description {
    font-size: 1.1em;
    line-height: 1.7;
    margin-bottom: 15px;
}

.language-info {
    font-style: italic;
    color: #7f8c8d;
    font-size: 0.9em;
    margin-top: 20px;
    border-top: 1px solid #eee;
    padding-top: 10px;
}
</style>