import pigment from "pigment-ui";
import "pigment-ui/styles";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(pigment).use(router);
app.mount("#app");
