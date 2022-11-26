import { createPigment } from "pigment-ui";
import "pigment-ui/styles";

import { createApp } from "vue";
import App from "./App.vue";

import "@fortawesome/fontawesome-free/js/all.js";

const app = createApp(App);
const pigment = createPigment();

app.use(pigment);
app.mount("#app");
