import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import WithRender from './settings.tpl.html';


import './settings.scss';

@WithRender
@Component({})
export default class Settings extends Vue {
    //TODO store
    //fixedAmount = 0;
    //maxSlots = 0;

    async mounted() {
        this.$store.dispatch('getFixedAmount');
        this.$store.dispatch('getSlots');
        this.$store.dispatch('getAvailableSlots');
    }

    get fixedAmountModel() : number {
        return this.$store.getters.fixedAmount;
    }

    set fixedAmountModel(value:number)  {
        this.$store.dispatch('setFixedAmount', value);
    }

    get maxSlots() : number {
        return this.$store.getters.maxSlots;
    }

    set maxSlots(value: number) {
        this.$store.dispatch('setMaxSlots', value);
    }

    get slotsAvailable(): number {
        return this.$store.getters.slotsAvailable;
    }



    async save() {
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
