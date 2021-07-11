import { createStore } from "vuex";
import User from "./modules/user.store";

const store = createStore({
  modules: {
    User,
  },
});

export default store;
