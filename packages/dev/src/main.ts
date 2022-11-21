import pigment from "pigment-ui";
import "pigment-ui/styles";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.use(pigment);
app.mount("#app");
