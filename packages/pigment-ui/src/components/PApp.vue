<template>
  <div class="p-app">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style>
.p-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
