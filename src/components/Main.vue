<template>
  <main id="main">
    <section class="intro">
      <h2>Who I am</h2>
      <p>
        Hi, I'm Emilian. My favorite tech language is JavaScript. I'm passionate about the
        entire world of web development, particularly front-end. I love the
        world of web development—it's my favorite hobby, and it's what keeps me
        going. Every website is like a piece of art waiting to be discovered.
        Every animation, every color, every font. Every detail matters, which is
        why I try not to rely too heavily on frameworks (even though I know
        them). That said:
      </p>
    </section>
    <section class="my-face"></section>
  </main>
</template>

<script setup>
import "../assets/main.css";
</script>

<style scoped>
main {
  padding: 48px 96px;
  background-color: var(--color-white);
  color: var(--color-black);
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}

.intro {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.intro h2 {
  font-size: 3rem;
  color: var(--color-red);
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
}

.intro h2::after {
  content: '';
  display: block;
  width: 100px;
  height: 4px;
  background: var(--color-red);
  margin: 1rem auto;
}

.intro p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  text-align: justify;
}

.my-face {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin: 3rem auto;
  border: 5px solid var(--color-red);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  
  /* Stile per l'immagine di sfondo */
  background-image: url('../assets/img/me.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  /* Effetto hover */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.my-face:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

/* Media Queries */
@media (max-width: 1082px) {
  main {
    padding: 48px;
  }
  
  .intro h2 {
    font-size: 2.5rem;
  }
  
  .my-face {
    width: 220px;
    height: 220px;
  }
}

@media (max-width: 879px) {
  main {
    padding: 32px;
  }
  
  .intro {
    padding: 1rem;
  }
  
  .intro h2 {
    font-size: 2rem;
  }
  
  .intro p {
    font-size: 1.1rem;
  }
  
  .my-face {
    width: 180px;
    height: 180px;
    margin: 2rem auto;
  }
}

@media (max-width: 549px) {
  main {
    padding: 24px 16px;
  }
  
  .intro h2 {
    font-size: 1.8rem;
  }
  
  .intro p {
    font-size: 1rem;
    text-align: left;
  }
  
  .my-face {
    width: 150px;
    height: 150px;
    border-width: 3px;
  }
}
</style>