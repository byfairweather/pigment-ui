<template>
  <PIcon icon="home" />
  <PIcon icon="trash" />
  <h1>Customizing Icons</h1>
  <pre>
.use(pigment, { 
  icons: { 
    iconFormat: (pack: string, icon: string) =&gt; `&lt;span class=&quot;${pack}&quot;&gt;${icon}&lt;/span&gt;`,
    defaultPack: "fas",
    defaultIcons: {
      menu: { pack: "fas", name: "menu" },
      chevron: { pack: "fas", name: "chevron" },
    },
  }
})
  </pre>
</template>
