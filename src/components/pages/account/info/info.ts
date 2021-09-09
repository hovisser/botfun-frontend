import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import WithRender from './info.tpl.html';


import './info.scss';

@WithRender
@Component({})
export default class Info extends Vue {

    mounted(): void {
        this.$store.dispatch('getMoney');
    }

    get money() : number{    
        return this.$store.getters.money;
    }    
}