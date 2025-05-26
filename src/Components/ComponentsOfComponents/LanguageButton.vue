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
  border: 1px solid var(--color-accent-blue);
  border-radius: 6px;
  background-color: var(--color-background-light);
  color: var(--color-accent-blue);
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.1s ease;
  min-width: 60px;

  &:hover {
    background-color: var(--color-accent-blue);
    color: white;
    border-color: var(--color-accent-blue);
  }

  &:active {
    transform: translateY(1px);
  }

  &.active {
    background-color: var(--color-accent-blue);
    color: white;
    border-color: var(--color-accent-blue);
  }
}
</style>