import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import WithRender from './settings.tpl.html';


import './settings.scss';
import { SettingPair, SettingsState } from '@/store/settings';

@WithRender
@Component({})
export default class Settings extends Vue {
    //TODO store
    //fixedAmount = 0;
    //maxSlots = 0;

    async mounted(): Promise<void> {
        console.log('items are', this.$store.getters.config);

       /*for (const [key, value] of Object.entries(this.$store.getters.config)) {
            console.log(`${key}: ${value}`);
            this.$store.dispatch('get', key);
        }*/
        this.$store.dispatch('get', 'fixedAmount');
        this.$store.dispatch('get', 'maxSlots');
        this.$store.dispatch('getAvailableSlots');
    }

    get fixedAmountModel() : number {
        return this.$store.getters.config.fixedAmount;
    }

    set fixedAmountModel(value:number)  {
        this.$store.dispatch('save', { key: 'fixedAmount', value: value});
    }

    get maxSlots() : number {
        return this.$store.getters.config.maxSlots;
    }

    set maxSlots(value: number) {
       this.$store.dispatch('save', { key: 'maxSlots', value: value});
    }

    get slotsAvailable(): number {
        return this.$store.getters.slotsAvailable;
    }

  
    async restart(): Promise<void> {
        this.$store.dispatch('restart');
    }

    get items() : SettingsState {
        console.log('items are', this.$store.getters.config);
    
        return this.$store.getters.config;
    }

    changing(val: string | number | boolean, key: string): void {
        console.log('Changing', val, key);
        this.$store.dispatch('save', { key: key, value: val});
    }

    prettyPrint(val: string) : string {
        const word : string =  val.replace(/([A-Z])/g, ' $1').toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }


    getType(val: string | number | boolean) : string {
        if(typeof(val) === 'number') {
            return 'number';
        }

        if(typeof(val) === 'string') {
            return 'text';
        }

        if(typeof(val) === 'boolean') {
            return 'checkbox';
        }

        return 'undefined';
    }
    async save(): Promise<void> {
       // alert(`Save shit ${this.fixedAmount}`);
       /* const saveResult1 = await fetch(`http://192.168.178.109:1337/api/v1/settings/set/fixedAmount/${this.fixedAmount}`, {
            method: 'GET',
            credentials: 'include',
        });

        const saveFixed: any = await saveResult1.json();
        console.log('Saved fixed', saveFixed);

        const saveResult2 = await fetch(`http://192.168.178.109:1337/api/v1/settings/set/maxSlots/${this.maxSlots}`, {
            method: 'GET',
            credentials: 'include',
        });

        const saveFixed2: any = await saveResult2.json();
        console.log('Saved fixed', saveFixed2);*/
    }

}
