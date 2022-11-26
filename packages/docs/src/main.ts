import { createPigment } from "pigment-ui";
import "pigment-ui/styles";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@fortawesome/fontawesome-free/js/all.js";

const app = createApp(App);
const pigment = createPigment();

app.use(pigment).use(router);
app.mount("#app");
