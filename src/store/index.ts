import { createStore } from "vuex";
import User from "./modules/user.store";

export default createStore({
  modules: {
    User,
  },
});
