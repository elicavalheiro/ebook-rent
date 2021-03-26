import { createStore } from 'vuex'
import axios from '@/plugins/axios';

export default createStore({
  state: {
    books_state: []
  },
  mutations: {
    populate_books_state(state, payload){
      state.books_state = payload;
    }
  },
  actions: {
    async get_books(context){
      const { data } = await axios.get('/books');
      context.commit('populate_books_state', data);
    }
  },
  modules: {
  }
})
