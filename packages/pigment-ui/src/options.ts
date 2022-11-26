export const pigmentOptions: PigmentOptions = {
  icons: {
    iconTemplate: (icon: Icon) =>
      `<i class='${icon.pack} fa-${icon.name}'></i>`,
    defaultPack: "fas",
    defaultIcons: {
      menu: { pack: "fas", name: "menu" },
      chevron: { pack: "fas", name: "chevron" },
    },
  },
};

export interface PigmentOptions {
  icons: {
    iconTemplate: (icon: Icon) => string;
    defaultPack: string;
    defaultIcons: {
      menu: Icon | string;
      chevron: Icon | string;
    };
  };
}

export interface Icon {
  pack?: string;
  name: string;
}
