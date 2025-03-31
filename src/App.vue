<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer v-if="$route.path !== '/contacts'" />
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
        :style="{ transform: isVisible ? (isHovered ? 'rotate(180deg)' : 'rotate(0deg)') : 'rotate(180deg)' }"
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
      defaultColor: "#ff0000", // Rosso
      hoverColor: "#cc0000",   // Rosso più scuro per hover
      scrollThreshold: 300
    };
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
:root {
  --scroll-bg: #000000;        /* Nero puro */
  --scroll-arrow: #ff0000;     /* Rosso */
  --scroll-arrow-hover: #cc0000; /* Rosso scuro */
  --scroll-shadow: rgba(255, 0, 0, 0.2); /* Ombra rossastra */
}

.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--scroll-bg);
  box-shadow: 0 2px 10px var(--scroll-shadow);
  border: 1px solid var(--scroll-arrow); /* Bordo rosso */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  z-index: 999;
}

.scroll-to-top.show {
  opacity: 1;
  transform: translateY(0);
}

.scroll-to-top:hover {
  box-shadow: 0 4px 12px var(--scroll-shadow);
  border-color: var(--scroll-arrow-hover);
}

.scroll-to-top svg {
  transition: transform 0.3s ease, fill 0.2s ease;
}
</style>