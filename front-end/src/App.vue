<template>
  <nav class="menu">
    <h1>Gam-o-Mod</h1>
    <div>
      <router-link to="/">Produits</router-link> |
      <router-link to="/about">À propos</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
}

.menu a {
  text-decoration: none;
  color: white;
}
.menu a:hover {
  color: lightcoral;
}
</style>
