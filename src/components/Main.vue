<template>
  <main id="main">
    <section class="intro">
      <h2>Who I am</h2>
      <p>
        Hi, I’m Emilian. My favorite tech language is . I’m passionate about the
        entire world of web development, particularly front-end. I love the
        world of web development—it’s my favorite hobby, and it’s what keeps me
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
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: linear-gradient(
    to bottom,
    var(--color-myred),
    var(--color-black)
  );
}

.intro {
  color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 0 80px;
  font-size: 2.4rem;;
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
  width: 100%;
  border-radius: 50%;
}
</style>
