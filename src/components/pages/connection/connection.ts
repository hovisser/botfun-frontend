import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import WithRender from './connection.tpl.html';


import './connection.scss';

@WithRender
@Component({})
export default class Connection extends Vue {
    get botFullUrl() : number {
        return this.$store.getters.robotHost;
    }

    get botHost() : string {
        return this.$store.getters.host;
    }

    set botHost(value: string) {
        this.$store.commit('setHost', value);
    }

    get botPort() : number {
        return this.$store.getters.port;
    }

    set botPort(val: number) {
        this.$store.commit('setPort', val);
    }

    get errorMsg() {
        return this.$store.getters.errorMsg;
    }


    async testConnection() {
        try {

            await this.$store.dispatch('test');
        } catch(ex) {
            console.error(ex);
        }
    }
}