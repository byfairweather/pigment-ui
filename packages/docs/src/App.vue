<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style>
nav {
  background-color: grey;
  margin-bottom: 12px;
  padding: 12px;
}

nav a {
  margin-right: 20px;
}
</style>
