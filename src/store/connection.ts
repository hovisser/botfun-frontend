import { ActionContext, Module } from "vuex";
import { RootState } from ".";


export interface ConnectionState {
    host: string;
    port: number;
    errorMsg: string | boolean;
}

const connectionStore: Module<ConnectionState, RootState> = {
    state: {      
        host: 'http://192.168.178.109',
        port: 1337,
        errorMsg: false,
    },  
    getters: {
        robotHost: state => {
            return `${state.host}:${state.port}`;
        },
        host: state => {
          return state.host;
        },
        port: state => {
            return state.port;
        },
        errorMsg: state => {
            return state.errorMsg
        }
    }, 
    actions: {
       async test(store: ActionContext<ConnectionState, RootState>) {
            try {
                store.commit('clearError');
                const testResult: Response = await fetch(`${store.getters.robotHost}/api/v1/bot/uptime`, {
                    credentials: 'include'
                });
                         
                const uptime = await testResult.json();

                store.commit('setError', `OK: up for ${uptime} `);

            } catch(ex) {
                store.commit('setError', ex)
            }
       } 
    }, 
    mutations: {
        setHost(state: ConnectionState, host: string) {
            state.host = host;
            console.log('Host set', state.host);
        },
        setPort(state: ConnectionState, port: number) {
            state.port = port;
            console.log('Port set', state.port);
        },
        setError(state: ConnectionState, val: string) {
            state.errorMsg = val;
        },
        clearError(state: ConnectionState) {
            state.errorMsg = false;
        }

    }   
}

export default connectionStore;
  