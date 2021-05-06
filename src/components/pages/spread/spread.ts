import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import WithRender from './spread.tpl.html';


import './spread.scss';

@WithRender
@Component({})
export default class Spread extends Vue {
}
