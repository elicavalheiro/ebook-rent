import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import { makeServer } from "./server";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import "./assets//styles/global.scss";

library.add(faSearch);

makeServer();

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).use(store).mount("#app");
