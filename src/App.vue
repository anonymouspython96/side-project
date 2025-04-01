<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer v-if="shouldShowFooter" />
    <button
      class="scroll-to-top"
      :class="{ 'show': isVisible }"
      @click="scrollToTop"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      aria-label="Scroll to top"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :style="{ 
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.2s ease'
        }"
      >
        <path
          :fill="isHovered ? hoverColor : defaultColor"
          d="M12 4L4 12L5.41421 13.4142L12 6.82843L18.5858 13.4142L20 12L12 4Z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import "./assets/main.css";
import Navbar from "./views/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      isVisible: false,
      isHovered: false,
      defaultColor: "var(--color-red)",
      hoverColor: "var(--color-dark-red)",
      scrollThreshold: 300
    };
  },
  computed: {
    shouldShowFooter() {
      // Hide footer on contact page or any other pages you specify
      return !['/contacts'].includes(this.$route.path);
    }
  },
  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > this.scrollThreshold;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      // Reset hover state after click
      this.isHovered = false;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
#app {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: var(--color-black);
  box-shadow: 0 2px 15px rgba(255, 0, 0, 0.25);
  border: 2px solid var(--color-red);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 1000;
  outline: none;
}

.scroll-to-top.show {
  opacity: 1;
  transform: translateY(0);
}

.scroll-to-top:hover {
  background: var(--color-dark-black);
  box-shadow: 0 4px 20px rgba(255, 0, 0, 0.35);
  border-color: var(--color-dark-red);
}

.scroll-to-top:focus-visible {
  box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.5);
}

/* Animation for the first appearance */
@keyframes bounce-in {
  0% {
    transform: translateY(20px) scale(0.8);
    opacity: 0;
  }
  50% {
    transform: translateY(0) scale(1.1);
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

.scroll-to-top.show {
  animation: bounce-in 0.4s ease-out;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .scroll-to-top {
    width: 3rem;
    height: 3rem;
    bottom: 1.5rem;
    right: 1.5rem;
  }
}

@media (max-width: 480px) {
  .scroll-to-top {
    width: 2.8rem;
    height: 2.8rem;
    bottom: 1rem;
    right: 1rem;
  }
}
</style>