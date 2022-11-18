<template>
  <div class="p-box">Hello World!</div>
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
.p-box {
  color: var(--test-var);
}
</style>
