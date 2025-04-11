<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer v-if="shouldShowFooter" />
    <button
      class="scroll-to-top"
      :class="{ 'show': isVisible }"
      @click="scrollToTop"
      aria-label="Scroll to top"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="var(--color-red)"
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
      scrollThreshold: 300
    };
  },
  computed: {
    shouldShowFooter() {
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
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: var(--color-white);
  border: 2px solid var(--color-red);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.scroll-to-top.show {
  opacity: 1;
  transform: translateY(0);
}

.scroll-to-top:hover {
  transform: translateY(0) scale(1.1);
  background: var(--color-red);
}

.scroll-to-top:hover path {
  fill: var(--color-white);
}

.scroll-to-top:active {
  transform: translateY(0) scale(0.95);
}

@media (max-width: 768px) {
  .scroll-to-top {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 3rem;
    height: 3rem;
  }
}
</style>