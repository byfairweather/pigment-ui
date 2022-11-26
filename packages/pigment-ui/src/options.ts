export const pigmentOptions: PigmentOptions = {
  icons: {
    iconFormat: (icon: Icon) => `<i class='${icon.pack} fa-${icon.name}'></i>`,
    defaultPack: "fas",
    defaultIcons: {
      menu: { pack: "fas", name: "menu" },
      chevron: { pack: "fas", name: "chevron" },
    },
  },
};

export interface PigmentOptions {
  icons: {
    iconFormat: (icon: Icon) => string;
    defaultPack: string;
    defaultIcons: {
      menu: Icon;
      chevron: Icon;
    };
  };
}

interface Icon {
  pack: string;
  name: string;
}
