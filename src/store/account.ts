import { ActionContext, Module } from "vuex";
import { RootState } from ".";


export interface SpreadPair {
    perc: number;
    pair: string;
}

export interface AccountState {
    spreads: SpreadPair[],
    money: number
}

const accountStore: Module<AccountState, RootState> = {
    state: {      
        spreads: [],  
        money: 0,
    },  
    getters: {
        spreads: state => {
          return state.spreads;
        },
        money: state => {
            return state.money;
        }
    },   
    actions: {
        async getSpread(store: ActionContext<AccountState, RootState>) : Promise<void> {
            const spreadResult: Response = await fetch(`http://192.168.178.50:3002/api/v1/account/spread`, {
                credentials: 'include'
            });
                     
            store.state.spreads = await spreadResult.json();
        },
        async getMoney(store: ActionContext<AccountState, RootState>) : Promise<void> {
            const moneyResult: Response = await fetch(`http://192.168.178.50:3002/api/v1/account/money`, {
                credentials: 'include'
            });
                     
            store.state.money = await moneyResult.json();
        }
    }   
}

export default accountStore;
  