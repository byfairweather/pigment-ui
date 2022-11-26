import type { Plugin } from "vue";
import type { PartialDeep } from "type-fest";
import deepmerge from "deepmerge";

import { pigmentOptions, type PigmentOptions } from "./options";
import "./styles/index.css";

import PBox from "./components/PBox.vue";
import PIcon from "./components/PIcon.vue";

declare module "vue" {
  interface GlobalComponents {
    PBox: typeof PBox;
    PIcon: typeof PIcon;
  }
}

export function createPigment(options?: PartialDeep<PigmentOptions>): Plugin {
  return {
    install: (app) => {
      Object.assign(pigmentOptions, deepmerge(pigmentOptions, options ?? {}));
      app.component("PBox", PBox);
      app.component("PIcon", PIcon);
    },
  } as Plugin;
}
