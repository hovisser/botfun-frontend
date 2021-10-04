import { ListFormat } from "typescript";
import { ActionContext, Module } from "vuex";
import { RootState } from ".";

export interface SettingPair {
    key: string;
    value: string | number | boolean;
}

export interface SettingsState {
    port: number,
    bitvavoApi: string,
    bitvavoSecret: string,
    binanceKey: string,
    binanceSecret: string,
    bittrexKey: string;
    bittrexSecret: string;
    krakenKey: string,
    krakenSecret: string,
    coinbaseKey: string,
    coinbaseSecret: string,
    coinbasePassphrase: string,
    coinbaseSandboxKey: string,
    coinbaseSandboxSecret: string,
    coinbaseSandboxPassphrase: string,
    gateioKey: string,
    gateioSecret: string,
    ftxKey: string,
    ftxSecret: string,
    bfxKey: string,
    bfxSecret: string,
    bybitKey: string,
    bybitSecret: string,
    pushoverUser: string,
    pushoverTokenBitvavo: string,
    pushoverTokenKraken: string,
    pushoverTokenBinance: string,
    pushoverTokenCoinbase: string,
    pushoverTokenGateio: string,
    pushoverTokenFTX: string,
    pushoverTokenftx: string,
    pushoverTokenBitfinex: string,
    pushoverTokenbybit: string,
    loglevelDev: string,
    logLevelProd: string,
    nodeEnvironment: string | undefined,
    socketTimeIntervalMs: number,
    apiVersion: number,
    buyItemSizeMin: number,
    executeRuleTimeIntevalSec: number,
    logFileError: string,
    logFileCombined: string,
    defaultFeePerc: number,
    scheduleMin: number| string,
    scheduleHour: number| string,
    scheduleDayOfMonth: number| string,
    scheduleMonth: number| string,
    scheduleDayOfWeek: number| string,
    disableTrading: boolean,
    tradingStepAmount: number,
    minSpreadPerc: number,
    tradeRate: number,
    fixedAmount: number,
    makeOwnSell: number,
    krakenOn: boolean,
    binanceOn: boolean,
    bitvavoOn: boolean,
    coinbaseOn: boolean,
    bittrexOn: boolean,
    gateioOn: boolean,
    ftxOn: boolean,
    bfxOn: boolean,
    bytbitOn: boolean,
    coinbaseSandbox: boolean,
    strategy: string,
    maxSlots: number
}

const config: SettingsState = {    
    port: +process.env.PORT || 0,
    bitvavoApi: process.env.BITVAVO_API_KEY || undefined,
    bitvavoSecret: process.env.BITVAVO_API_SECRET || undefined,
    binanceKey: process.env.BINANCE_API_KEY || undefined,
    binanceSecret: process.env.BINANCE_API_SECRET || undefined,
    bittrexKey: process.env.BITTREX_API_KEY || undefined,
    bittrexSecret: process.env.BITTREX_API_SECRET || undefined,
    krakenKey: process.env.KRAKEN_API_KEY || undefined,
    krakenSecret: process.env.KRAKEN_API_SECRET || undefined,
    coinbaseKey: process.env.COINBASE_API_KEY || undefined,
    coinbaseSecret: process.env.COINBASE_API_SECRET || undefined,
    coinbasePassphrase: process.env.COINBASE_API_PASSPHRASE || undefined,
    coinbaseSandboxKey: process.env.COINBASE_API_SANDBOX_KEY || undefined,
    coinbaseSandboxSecret: process.env.COINBASE_API_SANDBOX_SECRET || undefined,
    coinbaseSandboxPassphrase: process.env.COINBASE_API_SANDBOX_PASSPHRASE || undefined,
    gateioKey: process.env.GATEIO_API_KEY || undefined,
    gateioSecret: process.env.GATEIO_API_SECRET || undefined,
    ftxKey: process.env.FTX_API_KEY || undefined,
    ftxSecret: process.env.FTX_API_SECRET || undefined,
    bfxKey: process.env.BFX_API_KEY || undefined,
    bfxSecret: process.env.BFX_API_SECRET || undefined,
    bybitKey: process.env.BYBIT_API_KEY || undefined,
    bybitSecret: process.env.BYBIT_API_SECRET || undefined,
    pushoverUser:  process.env.PUSHOVER_USER || undefined,
    pushoverTokenBitvavo:  process.env.PUSHOVER_TOKEN_BITVAVO || undefined,
    pushoverTokenKraken:  process.env.PUSHOVER_TOKEN_KRAKEN || undefined,
    pushoverTokenBinance: process.env.PUSHOVER_TOKEN_BINANCE || undefined,
    pushoverTokenCoinbase: process.env.PUSHOVER_TOKEN_COINBASE || undefined,
    pushoverTokenGateio: process.env.PUSHOVER_TOKEN_GATEIO || undefined,
    pushoverTokenFTX: process.env.PUSHOVER_TOKEN_FTX|| undefined,
    pushoverTokenftx: process.env.PUSHOVER_TOKEN_FTX|| undefined,
    pushoverTokenBitfinex: process.env.PUSHOVER_TOKEN_BFX|| undefined,
    pushoverTokenbybit: process.env.PUSHOVER_TOKEN_BYBIT|| undefined,
    loglevelDev:  process.env.LOG_LEVEL_DEVELOPMENT || undefined,
    logLevelProd:  process.env.LOG_LEVEL_PRODUCTION || undefined,
    nodeEnvironment:  undefined,
    socketTimeIntervalMs:  +process.env.SOCKET_TIME_INTERVAL_MS || 0,
    apiVersion: +process.env.API_VERSION || 0,
    buyItemSizeMin: +process.env.BUY_ITEM_SIZE_MIN || 0,
    executeRuleTimeIntevalSec:  +process.env.EXCUTE_RULE_TIME_INTERVAL_MINUTES || 0,
    logFileError: process.env.LOG_FILE_ERROR || undefined,
    logFileCombined: process.env.LOG_FILE_COMBINED || undefined,
    defaultFeePerc:  +process.env.DEFAULT_FEE_PERCENTAGE || 0,
    scheduleMin: process.env.SCHEDULE_MINUTES || 0,
    scheduleHour: process.env.SCHEDULE_HOUR || undefined,
    scheduleDayOfMonth: process.env.SCHEDULE_DAY_OF_MONTH || undefined,
    scheduleMonth: process.env.SCHEDULE_MONTH || undefined,
    scheduleDayOfWeek: process.env.SCHEDULE_DAY_OF_WEEK || undefined,
    disableTrading: process.env.DISABLE_TRADING ? process.env.DISABLE_TRADING.match(/true/) != null : false,
    tradingStepAmount:  +process.env.TRADING_STEP_AMOUNT || 0,
    minSpreadPerc:  +process.env.MIN_SPREAD_PERC || 0,
    fixedAmount: +process.env.FIXED_AMOUNT || 0,
    makeOwnSell: +process.env.MAKE_OWN_SELL || 0,
    tradeRate: +process.env.TRADE_RATE || 0,
    krakenOn: process.env.KRAKEN_ON ? process.env.KRAKEN_ON.match(/true/) != null : false,
    binanceOn: process.env.BINANCE_ON ? process.env.BINANCE_ON.match(/true/) != null : false,
    bittrexOn: process.env.BITTREX_ON ? process.env.BITTREX_ON.match(/true/) != null : false,
    bitvavoOn: process.env.BITVAVO_ON ? process.env.BITVAVO_ON.match(/true/) != null : false,
    coinbaseOn: process.env.COINBASE_ON ? process.env.COINBASE_ON.match(/true/) != null : false,
    gateioOn:  process.env.GATEIO_ON ? process.env.GATEIO_ON.match(/true/) != null : false,
    ftxOn:  process.env.FTX_ON ? process.env.FTX_ON.match(/true/) != null : false,
    bfxOn:  process.env.BFX_ON ? process.env.BFX_ON.match(/true/) != null : false,
    bytbitOn:  process.env.BYBIT_ON ? process.env.BYBIT_ON.match(/true/) != null : false,
    coinbaseSandbox: process.env.COINBASE_SANDBOX ? process.env.COINBASE_SANDBOX.match(/true/) != null : false,
    strategy: process.env.STRATEGY ? process.env.STRATEGY: undefined,
    maxSlots: process.env.MAX_SLOTS ? +process.env.MAX_SLOTS : 0,
};

const settingsStore: Module<SettingsState, RootState> = {
    state: config,
    getters: {
        config: (state) : SettingsState => {
            return state;
        }
    },   
    actions: {
        async restart(store: ActionContext<SettingsState, RootState>) : Promise<boolean> {
            const result: Response = await fetch(`${store.getters.robotHost}/api/v1/bot/restart`, {
                credentials: 'include'
            });
                     
            return result.ok;
        },
        async get(store: ActionContext<SettingsState, RootState>, key: string) : Promise<string | number | boolean | undefined> {
            const result: Response = await fetch(`${store.getters.robotHost}/api/v1/settings/get/${key}`, {
                credentials: 'include'
            });
            
            if(result && result.ok) {
                const value = await result.json();
                store.commit('set', { key: key, value: value });
                return value;
            }

            return undefined;
        },
        async load(store: ActionContext<SettingsState, RootState>) : Promise<[string, number|boolean|string][]>{
            const result: Response = await fetch(`${store.getters.robotHost}/api/v1/settings/all`, {
                credentials: 'include'
            });
            
            const entries =  await result.json();

            for (const [key, value] of entries) {
                console.log(`${key}: ${value}`);
                store.commit('set', { key: key, value: value });
            }

            return entries;
        },
        async save(store: ActionContext<SettingsState, RootState>, settingPair: SettingPair): Promise<boolean> {
            try {                  
                const response: Response = await fetch(`http://192.168.178.109:1337/api/v1/settings/set/${settingPair.key}/${settingPair.value}`, {
                    method: 'GET',
                    credentials: 'include',
                });

                if(response && response.ok) {
                    console.log('Saved', settingPair);        
                    store.commit('set', settingPair);
                    return response.ok;
                } else {
                    throw new Error(`Could not save settings for ${settingPair.key} value: ${settingPair.value}`);
                }
                
            } catch(ex) {
                console.error('Error:', ex);
                return false;
            }
        },
    },
    mutations: {
        async set(state: SettingsState, setting: SettingPair) {
            state[setting.key] = setting.value;
        },
    }
}

export default settingsStore;
  