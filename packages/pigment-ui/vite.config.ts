import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import command from "rollup-plugin-command";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), command("npm run types")],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Pigment UI",
      fileName: "pigment-ui",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        assetFileNames: "pigment-ui.[ext]",
      },
    },
  },
});
