import "amfe-flexible";
import "vant/lib/index.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VConsole from "vconsole";
import { parse } from "query-string";
// 公共图片处理（加载超时、失败处理）
import CmImg from "@/components/CmImg/index.vue";
import { throttle, debounce } from "@/directive";
import { Button, Toast, ActionSheet, Image as VanImage } from "vant";

if (process.env.VUE_APP_API_ENV !== "production") {
  new VConsole({ maxLogNumber: 1000 });
}

const app = createApp(App);
const urlQuery = parse(window.location.search.split("?")[1] || "") || {};

app.provide("$query", urlQuery);

app
  .use(store)
  .use(router)
  .use(Button)
  .use(Toast)
  .use(ActionSheet)
  .use(VanImage)
  .component(CmImg.name, CmImg)
  .directive("debounce", debounce)
  .directive("throttle", throttle)
  .mount("#app");
