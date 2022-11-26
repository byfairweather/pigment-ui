import type { Plugin } from "vue";
import type { PartialDeep } from "type-fest";
import deepmerge from "deepmerge";

export * from "./utils/layout";

import { pigmentOptions, type PigmentOptions } from "./utils/options";
import "./styles/index.css";

import PApp from "./components/PApp.vue";
import PBox from "./components/PBox.vue";
import PIcon from "./components/PIcon.vue";
import PNav from "./components/PNav.vue";
import PNavItem from "./components/PNavItem.vue";
import PPanel from "./components/PPanel.vue";

declare module "vue" {
  interface GlobalComponents {
    PApp: typeof PApp;
    PBox: typeof PBox;
    PIcon: typeof PIcon;
    PNav: typeof PNav;
    PNavItem: typeof PNavItem;
    PPanel: typeof PPanel;
  }
}

export function createPigment(options?: PartialDeep<PigmentOptions>): Plugin {
  return {
    install: (app) => {
      Object.assign(pigmentOptions, deepmerge(pigmentOptions, options ?? {}));
      app.component("PApp", PApp);
      app.component("PBox", PBox);
      app.component("PIcon", PIcon);
      app.component("PNav", PNav);
      app.component("PNavItem", PNavItem);
      app.component("PPanel", PPanel);
    },
  } as Plugin;
}
