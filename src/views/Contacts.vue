<template>
  <article id="contacts">
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
</template>

<script>
export default {
  name: "Contacts",
};
</script>

<style scoped>
* {
  background-color: var(--color-lgrey);
  color: var(--color-bagrey);
}
#contacts {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  font-size: 3rem;
}
a {
  text-decoration: none;
}
i:hover {
  color: var(--color-myred);
}
</style>
