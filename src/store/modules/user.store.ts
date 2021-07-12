import { ActionContext } from "vuex";
import { getAllUsers } from "../../api/users.api";

type User = {
  name: string;
  age: number;
};

type Users = {
  users: User[];
};

const state = {
  users: [],
};

const mutations = {
  SET_USERS(state: Users, payload: User[]) {
    state.users = payload;
  },
};

const actions = {
  async getUsers({ commit }: ActionContext<Users, any>, payload: User[]) {
    const { data } = await getAllUsers();
    commit("SET_USERS", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
