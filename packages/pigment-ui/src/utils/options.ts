export const pigmentOptions: PigmentOptions = {
  layout: {
    breakpoints: {
      xs: 300,
      sm: 500,
      md: 700,
      lg: 900,
    },
  },
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
  layout: {
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
  };
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
