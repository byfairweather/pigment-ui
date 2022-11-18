import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import pigment from "pigment-ui";
import "pigment-ui/styles";

const app = createApp(App);
app.use(pigment).use(router);
app.mount("#app");
