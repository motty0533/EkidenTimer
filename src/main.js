import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

createApp(App).use(router).mount("#app");

require("./assets/scss/normalize.css");
require("./assets/scss/style.scss");
