<template>
  <PApp>
    <PNav :mobile-breakpoint="ScreenSize.md">
      <template #logo>
        <PNavItem>
          <RouterLink to="/">Pigment</RouterLink>
        </PNavItem>
      </template>
      <template #start>
        <PNavItem>
          <RouterLink to="/">Home</RouterLink>
        </PNavItem>
        <PNavItem>
          <RouterLink to="/color">Color</RouterLink>
        </PNavItem>
        <PNavItem>
          <RouterLink to="/typography">Typography</RouterLink>
        </PNavItem>
        <PNavItem>
          <RouterLink to="/icons">Icons</RouterLink>
        </PNavItem>
      </template>
      <template #end>
        <PNavItem>
          <RouterLink to="/">Sign In</RouterLink>
        </PNavItem>
      </template>
      <template #mobile>
        <PNavItem>
          <RouterLink to="/">Home</RouterLink>
        </PNavItem>
      </template>
    </PNav>
    <PPanel>
      <RouterView />
    </PPanel>
  </PApp>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ScreenSize } from "pigment-ui";
</script>
