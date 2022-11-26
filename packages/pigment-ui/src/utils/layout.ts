import { ref } from "vue";
import { pigmentOptions } from "./options";

export enum ScreenSize {
  xs,
  sm,
  md,
  lg,
  xl,
}

export const screenSize = ref(getScreenSize());

function getScreenSize(): ScreenSize {
  const breakpoints = pigmentOptions.layout.breakpoints;
  if (window.outerWidth < breakpoints.xs) return ScreenSize.xs;
  if (window.outerWidth < breakpoints.sm) return ScreenSize.sm;
  if (window.outerWidth < breakpoints.md) return ScreenSize.md;
  if (window.outerWidth < breakpoints.lg) return ScreenSize.lg;
  return ScreenSize.xl;
}

window.addEventListener(
  "resize",
  () => (screenSize.value = getScreenSize()),
  true
);
