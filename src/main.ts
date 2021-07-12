import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import { makeServer } from "./server";

import "./assets//styles/global.scss";

makeServer();

createApp(App).use(router).use(store).mount("#app");
