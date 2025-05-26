// src/stores/language.js
import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: 'it', // Stato iniziale: Italiano
  }),
  actions: {
    toggleLanguage() {
      if (this.currentLanguage === 'it') {
        this.currentLanguage = 'en';
        console.log('Pinia Store: Lingua cambiata in Inglese (EN)');
      } else {
        this.currentLanguage = 'it';
        console.log('Pinia Store: Lingua cambiata in Italiano (IT)');
      }
    },
    setLanguage(lang) {
      if (['it', 'en'].includes(lang)) {
        this.currentLanguage = lang;
        console.log(`Pinia Store: Lingua impostata su: ${lang}`);
      } else {
        console.warn(`Pinia Store: Tentativo di impostare lingua non supportata: ${lang}`);
      }
    }
  },
  getters: {
    isEnglish: (state) => state.currentLanguage === 'en',
    isItalian: (state) => state.currentLanguage === 'it',
  },
});