<script setup></script>

<template>
  <header>
    <nav>
      <!--
      <router-link to="/">Home</router-link>
      <router-link to="/filmes">Filmes</router-link>
      -->
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  height: 3rem;
  display: flex;
  /* background-color: black; */
  color: #fff;
  font-size: 1.2rem;
  padding-left: 2rem;
}

nav {
  column-gap: 2rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

nav a {
  text-decoration: none;
  color: #fff;
}

main {
 background: #377037;
background: linear-gradient(90deg, rgba(55, 112, 55, 0.83) 0%, rgba(0, 0, 0, 1) 21%, rgba(7, 4, 9, 1) 75%, rgba(112, 64, 136, 0.4) 120%);
}
</style>
