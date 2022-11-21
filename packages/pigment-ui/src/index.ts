import type { Plugin } from "vue";
import PBox from "./components/PBox.vue";
import "./styles/index.css";

const plugin: Plugin = {
  install: (app, options) => {
    app.component("PBox", PBox);
  },
};

export default plugin;
