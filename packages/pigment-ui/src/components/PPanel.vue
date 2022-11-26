<template>
  <div class="p-panel">
    <div class="p-panel__content" v-bind="$attrs">
      <slot></slot>
    </div>
    <div class="p-panel__background">
      <slot name="background"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  inheritAttrs: false,
  setup() {
    return {};
  },
});
</script>

<style>
.p-panel {
  --panel-width: 80%;
  --panel-max-width: 800px;
  --panel-min-width: 200px;

  display: flex;
  justify-content: center;
  position: relative;
  max-width: 100vw;
}

.p-panel__content {
  max-width: var(--panel-max-width);
  min-width: var(--panel-min-width);
  width: var(--panel-width);
}

.p-panel__background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}
</style>
