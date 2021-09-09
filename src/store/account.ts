import { ActionContext, Module } from "vuex";
import { RootState } from ".";

export interface SpreadPair {
    perc: number;
    pair: string;
}

export interface AccountState {
    spreads: SpreadPair[],
    money: number, 
    availableSlots: number
}

const accountStore: Module<AccountState, RootState> = {
    state: {      
        spreads: [],  
        money: 0,
        availableSlots: 5,
    },  
    getters: {
        spreads: state => {
          return state.spreads;
        },
        money: state => {
            return state.money ? state.money.toFixed(2) : 0.00;
        },
        slotsAvailable: state => {
            return state.availableSlots
        }
    },   
    actions: {
        async getSpread(store: ActionContext<AccountState, RootState>) : Promise<void> {
            const spreadResult: Response = await fetch(`${store.getters.robotHost}/api/v1/account/spread`, {
                credentials: 'include'
            });
                     
            store.state.spreads = await spreadResult.json();
        },
        async getMoney(store: ActionContext<AccountState, RootState>) : Promise<void> {
            const moneyResult: Response = await fetch(`${store.getters.robotHost}/api/v1/account/money`, {
                credentials: 'include'
            });
                     
            store.state.money = await moneyResult.json();
        },
        async getAvailableSlots(store: ActionContext<AccountState, RootState>) : Promise<number> {
            const slotsResult: Response = await fetch(`${store.getters.robotHost}/api/v1/account/slots`, {
                credentials: 'include'
            });
                     
            store.state.availableSlots = await slotsResult.json();
            return  store.state.availableSlots;
        }
    }   
}

export default accountStore;
  