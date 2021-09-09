import Vue from 'vue';
import WithRender from './app.tpl.html';

@WithRender
export default class App extends Vue {
    async mounted(): Promise<void> {
        console.log('Loaded application');
    }
}
