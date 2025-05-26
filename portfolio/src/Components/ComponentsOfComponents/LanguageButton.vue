<template>
  <button @click="toggleLanguage" :class="buttonClass">
    {{ languageStore.isEnglish ? 'EN' : 'IT' }}
  </button>
</template>

<script>
import { useLanguageStore } from '@/stores/language';

export default {
  name: 'LanguageButton',
  setup() {
    const languageStore = useLanguageStore();

    const toggleLanguage = () => {
      languageStore.toggleLanguage();
    };

    return {
      languageStore,
      toggleLanguage,
    };
  },
  computed: {
    buttonClass() {
      return {
        'language-toggle-button': true,
        'active': this.languageStore.isEnglish,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.language-toggle-button {
  padding: 8px 15px;
  font-size: 15px;
  cursor: pointer;
  border: 1px solid var(--button-border-color, #a0a0a0);
  border-radius: 6px;
  background-color: var(--button-bg-color, #f5f5f5);
  color: var(--button-text-color, #444);
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.1s ease;

  &:hover {
    background-color: var(--button-hover-bg-color, #e0e0e0);
    border-color: var(--button-hover-border-color, #808080);
  }

  &:active {
    transform: translateY(1px);
  }

  &.active {
    background-color: var(--button-active-bg-color, #007bff);
    color: var(--button-active-text-color, white);
    border-color: var(--button-active-border-color, #0056b3);
  }
}
</style>