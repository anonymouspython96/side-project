<template>
  <footer id="footer">
    <article>
      <section>
        <a
          href="mailto:emilianmail96@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Invia email"
          ><i class="fa-regular fa-envelope"></i
        ></a>
      </section>
      <section>
        <a href="https://www.linkedin.com/in/timofeiemilian96/" target="_blank"
          ><i class="fa-brands fa-linkedin-in"></i
        ></a>
      </section>
      <section>
        <a href="https://github.com/anonymouspython96" target="_blank"
          ><i class="fa-brands fa-github"></i
        ></a>
      </section>
    </article>
    <article>
      <p>&copy; Copyright Emilian Timofei 2025. All rights reserved.</p>
      <p><a href="#">Privacy Policy</a></p>
      <p><a href="#">Terms & Conditions</a></p>
    </article>
  </footer>
</template>

<script>
import "../assets/main.css";
export default {
  name: "Footer",
};
</script>
<style scoped>
footer {
  width: 100%;
  padding: 16px 32px;
  background-color: var(--color-black);
  display: grid;
  grid-template-rows: 1fr 1fr;
  font-size: 1.2rem;
}

article {
  display: flex;
  gap: 32px;
  justify-content: space-evenly;
  color: var(--color-white);
  padding: 2rem;
}

p {
  width: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-gblack);
}

a {
  text-decoration: none;
  color: var(--color-gblack);
}

a:hover {
  color: var(--color-100green);
}

i {
  font-size: 2.4rem;
}
</style>
