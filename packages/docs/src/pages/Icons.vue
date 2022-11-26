<template>
  <PIcon icon="home" />
  <PIcon :icon="{ name: 'home' }" />
  <PIcon :icon="{ name: 'home', pack: 'fas' }" />
  <h1>Customizing Icons</h1>
  <pre>
const pigment = createPigment({ 
  icons: { 
    iconTemplate: (pack: string, icon: string) =&gt; `&lt;span class=&quot;${pack}&quot;&gt;${icon}&lt;/span&gt;`,
    defaultPack: "fas",
    defaultIcons: {
      menu: { pack: "fas", name: "menu" },
      chevron: { pack: "fas", name: "chevron" },
    },
  }
});
  </pre>
</template>
