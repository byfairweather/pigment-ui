<template>
  <PPanel>
    <nav class="p-nav">
      <div class="p-nav__logo">
        <slot name="logo"></slot>
      </div>
      <template v-if="screenSize > mobileBreakpoint">
        <div class="p-nav__start">
          <slot name="start"></slot>
        </div>
        <div class="p-nav__end">
          <slot name="end"></slot>
        </div>
      </template>
      <template v-else>
        <div class="p-nav__mobile">
          <PNavItem>
            <PIcon icon="bars"></PIcon>
          </PNavItem>
        </div>
      </template>
    </nav>
  </PPanel>
</template>

<script lang="ts">
import { screenSize, ScreenSize } from "@/utils/layout";
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  props: {
    mobileBreakpoint: {
      type: Number as PropType<ScreenSize>,
      default: ScreenSize.sm,
    },
  },
  setup() {
    return { screenSize, ScreenSize };
  },
});
</script>

<style>
.p-nav {
  --nav-height: 50px;
  --nav-item-spacing: 12px;

  display: flex;
  height: var(--nav-height);
  margin: 0 calc(var(--nav-item-spacing) / -2);
}

.p-nav__logo,
.p-nav__start,
.p-nav__end,
.p-nav__mobile {
  display: flex;
}

.p-nav__start {
  flex-grow: 1;
}

.p-nav__mobile {
  flex-grow: 1;
  justify-content: flex-end;
}
</style>
