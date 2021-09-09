import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import WithRender from './spread.tpl.html';


import './spread.scss';

@WithRender
@Component({})
export default class Spread extends Vue {

    mounted(): void {
        this.$store.dispatch('getSpread');
    }

    get spreads() : Spread[] {    
        return this.$store.getters.spreads;
    }

    image(coin: string) {
        try {
            const coinImage = (coin.indexOf("-") > -1) ? coin.split("-")[0].toLowerCase() : coin.toLowerCase();
            return  require(`@/assets/images/${coinImage}.png`);        
        } catch(ex) {
           // console.error(ex);
            return null;
        }
        
    }
    
}
