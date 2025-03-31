<template>
  <header>
    <section id="ctm"> <!-- ctm = call to main -->
        <h1>let emilianTimofei = "Frontend Developer";</h1>
        <p>Qui troverai una breve descrizione di chi sono, il mio CV, la mia cover letter ed i miei contatti!</p>
        <a href="#main">Scopri come<i class="fa-regular fa-circle-down"></i></a>
    </section>
    <section id="tech"> <!-- tech = technologies -->
      <i class="fa-brands fa-vuejs"></i>
      <i class="fa-brands fa-bootstrap"></i>
      <i class="fa-brands fa-js"></i>
      <i class="fa-brands fa-css3-alt"></i>
      <i class="fa-brands fa-html5"></i>
    </section>
  </header>
</template>

<script>
import "../assets/main.css";
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  /* 1100px query */
  width: 100%;
  height: calc(100vh - 54.5156px);
  background-image: url("../assets/img/slanted-gradient.svg");
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
}

#ctm {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 56px 0 0 80px;
}

h1 {
  font-size: 4rem;
  color: var(--color-red);
  padding-bottom: 32px;
}

p {
  font-size: 2rem;
  color: var(--color-red);
  padding-left: 8px;
  padding-bottom: 64px;
}

#ctm i {
  padding-left: 16px;
}

#tech {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 13.8rem;
  gap: 32px;
}

#tech i {
  font-size: 6.4rem;
  color: var(--color-white);
}
</style>
