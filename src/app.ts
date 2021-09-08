import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './app.tpl.html';

@WithRender
@Component({})
export default class App extends Vue {
  
}
