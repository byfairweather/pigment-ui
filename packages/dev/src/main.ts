import { createApp } from "vue";
import App from "./App.vue";

import pigment from "pigment-ui";
import "pigment-ui/styles";

const app = createApp(App);
app.use(pigment);
app.mount("#app");
