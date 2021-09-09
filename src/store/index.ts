import Vue from 'vue';
import Vuex from 'vuex';
import accountStore, { AccountState } from './account';
import connectionStore, { ConnectionState } from './connection';
import settingsStore, { SettingsState } from './settings';

Vue.use(Vuex);

export interface RootState {
  count: number;
  account?: AccountState;
  settings?: SettingsState;
  connection?: ConnectionState;
}

//type RootContext = ActionContext<RootState, RootState>;

const store = new Vuex.Store<RootState>({
  state: {
    count: 0,
  },
  mutations: {
    increment (state) {
      state.count++
    },
  },
  modules: {
    account: accountStore,
    settings: settingsStore,
    connection: connectionStore,
  }
})

export default store;