import { makeLogger } from "ts-loader/dist/logger";
import { convertToObject } from "typescript";
import { ActionContext, Module } from "vuex";
import { RootState } from ".";


export interface SettingsKeyVal {
    key: string;
    value: number | boolean | string
}

export interface SettingsState {
    maxSlots: number;
    fixedAmount: number;
}

const settingsStore: Module<SettingsState, RootState> = {
    state: {      
        maxSlots: 0,  
        fixedAmount: 0,
    },  
    getters: {
        maxSlots: state => {
          return state.maxSlots;
        },
        fixedAmount: state => {
            return state.fixedAmount;
        }
    },   
    actions: {
        async restart(store: ActionContext<SettingsState, RootState>) : Promise<void> {
            const fixedAmountResult: Response = await fetch(`${store.getters.robotHost}/api/v1/bot/restart`, {
                credentials: 'include'
            });
                     
            store.state.fixedAmount = await fixedAmountResult.json();
        },
        async getSlots(store: ActionContext<SettingsState, RootState>) : Promise<void> {
            const slotResult: Response = await fetch(`${store.getters.robotHost}/api/v1/settings/get/maxSlots`, {
                credentials: 'include'
            });
                     
            store.state.maxSlots = await slotResult.json();
        },
        async getFixedAmount(store: ActionContext<SettingsState, RootState>) : Promise<void> {
            const fixedAmountResult: Response = await fetch(`${store.getters.robotHost}/api/v1/settings/get/fixedAmount`, {
                credentials: 'include'
            });
                     
            store.state.fixedAmount = await fixedAmountResult.json();
        },
        async setFixedAmount(store: ActionContext<SettingsState, RootState>, amount: number) : Promise<void> {
            try {                  
                const saveResult = await fetch(`http://192.168.178.109:1337/api/v1/settings/set/fixedAmount/${amount}`, {
                    method: 'GET',
                    credentials: 'include',
                });

                const saveFixed: any = await saveResult.json();
                console.log('Saved fixed', saveFixed);        
                store.commit('storeFixedAmount', amount);
            } catch(ex) {
                console.error('Error', ex);
            }
        },
        async setMaxSlots(store: ActionContext<SettingsState, RootState>, slots:number) : Promise<void> {
            try {                  
                const saveResult = await fetch(`http://192.168.178.109:1337/api/v1/settings/set/maxSlots/${slots}`, {
                    method: 'GET',
                    credentials: 'include',
                });

                const saveFixed: any = await saveResult.json();
                console.log('Saved fixed', saveFixed);        
                store.commit('storeMaxSlots', slots);
            } catch(ex) {
                console.error('Error', ex);
            }
        }
    },
    mutations: {
        async storeFixedAmount(state: SettingsState, amount:number) {
            state.fixedAmount = amount;
      
        },
        async storeMaxSlots(state: SettingsState, slots:number) {
            state.maxSlots = slots;            
            const saveResult = await fetch(`http://192.168.178.109:1337/api/v1/settings/set/maxSlots/${slots}`, {
                method: 'GET',
                credentials: 'include',
            });

            const saveFixed: any = await saveResult.json();
            console.log('Saved fixed', saveFixed);
        },
    }
}

export default settingsStore;
  