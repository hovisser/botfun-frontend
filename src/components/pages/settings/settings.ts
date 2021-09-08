import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import WithRender from './settings.tpl.html';


import './settings.scss';

@WithRender
@Component({})
export default class Settings extends Vue {
    //TODO store
    fixedAmount = 0;
    maxSlots = 0;

    async mounted() {
        const fixedAmountResponse = await fetch(`http://localhost:3001/api/v1/settings/get/fixedAmount`, {
            credentials: 'include'
        });
        
        this.fixedAmount = await fixedAmountResponse.json() as number;

        const maxSlotsResponse = await fetch(`http://localhost:3001/api/v1/settings/get/maxSlots`, {
            credentials: 'include'
        });
        
        this.maxSlots = await maxSlotsResponse.json() as number;
    }

    async save() {
       // alert(`Save shit ${this.fixedAmount}`);
        const saveResult1 = await fetch(`http://localhost:3001/api/v1/settings/set/fixedAmount/${this.fixedAmount}`, {
            method: 'GET',
            credentials: 'include',
        });

        const saveFixed: any = await saveResult1.json();
        console.log('Saved fixed', saveFixed);

        const saveResult2 = await fetch(`http://localhost:3001/api/v1/settings/set/maxSlots/${this.maxSlots}`, {
            method: 'GET',
            credentials: 'include',
        });

        const saveFixed2: any = await saveResult2.json();
        console.log('Saved fixed', saveFixed2);
    }

}
