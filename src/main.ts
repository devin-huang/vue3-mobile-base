import "amfe-flexible";
import "vant/lib/index.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VConsole from "vconsole";
import { Button, Toast } from "vant";

new VConsole({ maxLogNumber: 1000 });

createApp(App).use(store).use(router).use(Button).use(Toast).mount("#app");
