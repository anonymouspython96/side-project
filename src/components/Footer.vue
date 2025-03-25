<template>
  <footer>
    <p>&copy; Copyright Emilian Timofei 2025. All rights reserved.</p>
    <p><a href="#">Privacy Policy</a></p>
    <p><a href="#">Terms & Conditions</a></p>
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
  display: flex;
  justify-content: space-around;
  background-color: white;
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
</style>
