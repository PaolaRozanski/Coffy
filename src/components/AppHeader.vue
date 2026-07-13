<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="menu">
    <h1>☕ Coffee Quality Challenge</h1>

    <nav>
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/avaliacoes">Avaliações</RouterLink>
      <RouterLink to="/ranking">Ranking</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.menu {
  background-color: #6f4e37;
  color: white;
  padding: 15px;
  text-align: center;
}

h1 {
  margin-bottom: 10px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

a {
  color: white;
  text-decoration: none;
}

.router-link-exact-active {
  color: #ffd54f;
  font-weight: bold;
}
</style>
