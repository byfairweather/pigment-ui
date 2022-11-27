<template>
  <div class="p-nav__item">
    <slot></slot>
  </div>
</template>

<style>
.p-nav__item {
  align-items: center;
  display: flex;
  padding: 0 calc(var(--nav-item-spacing) / 2);
}
</style>
