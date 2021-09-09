import Vue from 'vue';
import Vuex from 'vuex';
import accountStore, { AccountState } from './account';

Vue.use(Vuex);

export interface RootState {
  count: number;
  account?: AccountState;
}

//type RootContext = ActionContext<RootState, RootState>;

const store = new Vuex.Store<RootState>({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  modules: {
    account: accountStore
  }
})

export default store;