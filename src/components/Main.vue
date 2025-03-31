<template>
  <main id="main">
    <section class="intro">
      <h2>Chi Sono</h2>
      <p>
        Ciao sono Emilian. Il mio linguaggio tech preferito è <i class="fa-brands fa-css3-alt"></i>. Sono appassionato di tutto il mondo dello sviluppo web. In particolare front-end. Amo il mondo dello sviluppo web. Penso che questo sia il mio passatempo preferito. Ed inoltre che il mondo dello sviluppo web mi fa vivere. Ogni sito è come un opera d'arte che chiede di essere scoperta. Ogni animazione, ogni colore, ogni font. Ogni dettaglio è importante, per questo tendo a non affidarmi troppo ai framework (pur conoscendoli s'intende). Detto ciò:
      </p>
      <a href="#footer">Scopri altro</a>
    </section>
    <section class="my-face">
    </section>
  </main>
</template>

<script>
import "../assets/main.css";
</script>

<style scoped>
main {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: linear-gradient(to bottom, var(--color-myred), var(--color-black));
}

.intro {
  color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: 0 80px;
  font-size: 2.4rem;
  text-align: justify;
}

.intro h2 {
  padding-bottom: 40px;
}

.intro a {
  margin-top: 40px;
}


.my-face {
  background-image: url("../assets/img/me.jpg");
  background-position-x: center;
  background-size: cover;
  height: 100vh;
}
</style>
