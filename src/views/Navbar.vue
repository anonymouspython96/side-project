<template>
  <nav id="box">
    <div class="nav">
      <img src="../assets/img/logo.png" alt="logo" />
      <div class="hamburger" @click="toggleMenu">
        <i class="fas fa-bars"></i>
      </div>
      <ul :class="{ 'active': isMenuOpen }">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/cv">Curriculum Vitae</router-link>
        </li>
        <li>
          <router-link to="/cl">Cover Letter</router-link>
        </li>
        <li>
          <router-link to="/contacts">Contacts</router-link>
        </li>
      </ul>
    </div>

    <div class="contacts">
      <a
        href="mailto:emilianmail96@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Invia email"
        >emilianmail96@gmail.com</a
      >
    </div>
  </nav>
</template>

<script>
import "../assets/main.css";
export default {
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
#box {
  width: 100%;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-black);
  color: var(--color-red);
}

img {
  width: 5.6rem;
  height: auto;
  object-fit: contain;
}

ul {
  display: flex;
  align-items: center;
  list-style: none;
}

li {
  padding-left: 32px;
}

a,
i {
  text-decoration: none;
  color: var(--color-red);
}

a:hover {
  color: var(--color-white);
  font-size: 1.4rem;
}

.nav {
  display: flex;
  align-items: center;
}
ul,
.contacts {
  font-size: 1.2rem;
}
.contacts {
  display: flex;
  align-items: center;
}

.contacts a,
i {
  padding-left: 32px;
}

.hamburger {
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 20px;
}

@media (max-width: 960px) {
  #box {
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
  }

  .nav {
    width: 100%;
    justify-content: space-between;
  }

  .hamburger {
    display: block;
  }

  .contacts {
    display: none;
  }

  ul {
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 80px;
    left: 0;
    background-color: var(--color-black);
    padding: 20px 0;
    z-index: 1000;
  }

  ul.active {
    display: flex;
  }

  li {
    padding: 10px 0;
    text-align: center;
    width: 100%;
  }

  li:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ul li:last-child {
    display: flex;
    justify-content: center;
  }

  ul li:last-child a {
    padding: 0;
  }
}
</style>