<template>
  <nav id="navbar">
    <div class="nav-container">
      <div class="logo-container">
        <img src="../assets/img/logo.png" alt="Emilian Timofei Logo" class="logo">
        <div class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
          <i class="fas fa-bars"></i>
        </div>
      </div>
      
      <ul :class="{ 'active': isMenuOpen }">
        <li>
          <router-link to="/" exact-active-class="active-link" @click="closeMenu">Home</router-link>
        </li>
        <li>
          <router-link to="/cl" active-class="active-link" @click="closeMenu">Cover Letter</router-link>
        </li>
        <li>
          <router-link to="/contacts" active-class="active-link" @click="closeMenu">Contacts</router-link>
        </li>
      </ul>
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
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>

<style scoped>
#navbar {
  width: 100%;
  background-color: var(--color-black);
  color: var(--color-white);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 60px;
  height: auto;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  position: relative;
}

a {
  color: var(--color-white);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 20px 15px;
  display: block;
  transition: all 0.3s ease;
}

a:hover {
  color: var(--color-red);
}

.active-link {
  color: var(--color-red);
  font-weight: 600;
}

.active-link::after {
  content: '';
  position: absolute;
  bottom: 15px;
  left: 15px;
  right: 15px;
  height: 2px;
  background-color: var(--color-red);
}

.hamburger {
  display: none;
  cursor: pointer;
  padding: 10px;
  margin-left: 15px;
}

.hamburger i {
  font-size: 1.8rem;
  color: var(--color-white);
}

/* Mobile styles */
@media (max-width: 992px) {
  .nav-container {
    padding: 0 20px;
    flex-direction: column;
    align-items: stretch;
  }
  
  .logo-container {
    padding: 15px 0;
    justify-content: space-between;
  }
  
  ul {
    display: none;
    flex-direction: column;
    width: 100%;
    background-color: var(--color-dark-black);
    padding: 10px 0;
  }
  
  ul.active {
    display: flex;
  }
  
  li {
    width: 100%;
    text-align: center;
  }
  
  a {
    padding: 15px;
  }
  
  .active-link::after {
    display: none;
  }
  
  .email-contact {
    display: none;
  }
  
  .hamburger {
    display: block;
  }
  
  /* Show email in mobile menu */
  ul.active li:last-child {
    display: flex;
    justify-content: center;
    padding: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
}

@media (max-width: 576px) {
  .nav-container {
    padding: 0 15px;
  }
  
  .logo {
    width: 50px;
  }
  
  a {
    font-size: 1rem;
  }
}
</style>