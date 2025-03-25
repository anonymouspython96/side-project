<template>
  <header>
    <section>
      <div>
        <h1>Repetita Aiuvant</h1>
        <p>Scrivi codice con la regola del 5!</p>
        <a href="#main">Scopri come<i class="fa-regular fa-circle-down"></i></a>
      </div>
    </section>
    <section>
      
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
  height: calc(100vh - 72px);
  background-image: url("../assets/img/slanted-gradient.svg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 4rem;
  color: var(--color-80green);
  padding-bottom: 32px;
}

p {
  font-size: 2rem;
  color: var(--color-80green);
  padding-left: 8px;
  padding-bottom: 64px;
}

a {
  font-size: 1.5rem;
  background-image: linear-gradient(to right,  var(--color-110green), var(--color-80green));
  padding: 32px 64px;
  border-radius: 32px;
  text-decoration: none;
  color: white;
}

a:hover {
  background: white;
  border: var(--color-110green) solid 1px;
  color: var(--color-110green);
}

i {
  padding-left: 16px;
}
</style>
