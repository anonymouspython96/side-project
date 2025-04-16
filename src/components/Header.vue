<template>
  <header>
    <section id="tech">
      <i class="fa-brands fa-vuejs"></i>
      <i class="fa-brands fa-bootstrap"></i>
      <i class="fa-brands fa-js"></i>
      <i class="fa-brands fa-css3-alt"></i>
      <i class="fa-brands fa-html5"></i>
    </section>
    <h1>{{ otherMagicStrings[0].h1 }}</h1>
    <p>
      {{ otherMagicStrings[0].firstP }}
    </p>
    <a href="#main">
      <i class="fa-regular fa-circle-down"></i>{{ otherMagicStrings[0].button }}<i class="fa-regular fa-circle-down"></i>
    </a>
  </header>
</template>

<script>
import "../assets/main.css";
export default {
  name: "Header",
  data() {
    return {
      otherMagicStrings: [
        {
          h1: "let emilianTimofei = 'Frontend Developer';",
          firstP: "Here, you'll find a brief description of who I am, my CV, my cover letter, and my contact details!",
          button: "More"
        }
      ]
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  min-height: 100vh;
  background-image: url("../assets/img/slanted-gradient.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}

#tech {
  display: flex;
  justify-content: center;
  font-size: 8rem;
  gap: 4rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

h1, p, a {
  padding: 24px 16px;
  margin: 0;
}

h1 {
  text-align: center;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

p {
  text-align: center;
  font-size: 2rem;
  text-shadow: 1px 1px 3px var(--color-black);
  max-width: 800px;
  margin-bottom: 2rem;
}

a {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 2rem;
  background-color: var(--color-black);
  padding: 24px;
  margin-top: 24px;
  border-radius: 16px;
  color: var(--color-red);
  border: solid 3px var(--color-red);
  transition: all 0.3s ease;
}

a:hover {
  background-color: var(--color-red);
  color: var(--color-black);
}

header i {
  padding: 0 24px;
}

@media (max-width: 1082px) {
  #tech {
    font-size: 6rem;
    gap: 3rem;
  }
  h1 {
    font-size: 3.5rem;
  }
  p {
    font-size: 1.5rem;
  }
}

@media (max-width: 911px) {
  #tech {
    font-size: 4rem;
    gap: 2rem;
  }
  h1 {
    font-size: 2.5rem;
  padding: 16px;
  margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.2rem;
    padding: 16px;
  }
  a {
    font-size: 1.5rem;
    padding: 16px;
  }
}

@media (max-width: 879px) {
  #tech {
    font-size: 3rem;
    gap: 1.5rem;
  }
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1rem;
  }
  a {
    font-size: 1.2rem;
  }
}

@media (max-width: 549px) {
  #tech {
    font-size: 2rem;
    gap: 1rem;
  }
  h1 {
    font-size: 1.5rem;
    padding: 12px;
  }
  p {
    font-size: 0.9rem;
    padding: 12px;
  }
  a {
    font-size: 1rem;
    padding: 12px;
  }
  header i {
    padding: 0 12px;
  }
}
</style>
