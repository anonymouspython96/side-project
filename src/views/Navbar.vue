<template>
  <nav id="box">
    <div class="nav">
      <img src="../assets/img/logo.png" alt="logo" />
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/cv">CV</router-link>
        </li>
        <li>
          <router-link to="/cl">CL</router-link>
        </li>
        <li>
          <router-link to="/contacts">Contacts</router-link>
        </li>
      </ul>
    </div>

    <div class="contacts">
      <a href="#">+39 327 974 6762</a>
      <i class="fa-solid fa-grip-lines-vertical"></i>
      <a href="#">emilianmail96@gmail.com</a>
    </div>
  </nav>
</template>

<script>
import "../assets/main.css";
export default {
  name: "Navbar",
};
</script>
<style scoped>
#box {
  width: 100%;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  background-color: var(--color-black);
  color: var(--color-red);
}

img {
  width: 5.6rem;
  height: auto;
  object-fit: contain;
}

ul {
  display: flex;
  align-items: center;
  list-style: none;
}

li {
  padding-left: 32px;
}

a,
i {
  text-decoration: none;
  color: var(--color-red);
}

a:hover {
  color: var(--color-white);
  font-size: 1.4rem;
}

.nav {
  display: flex;
}
ul,.contacts {
  font-size: 1.2rem;
}
.contacts {
  display: flex;
  align-items: center;
}

.contacts a,
i {
  padding-left: 32px;
}
</style>
