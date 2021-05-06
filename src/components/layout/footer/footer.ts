import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './footer.tpl.html';
import './footer.scss';

@WithRender
@Component({})
export default class Footer extends Vue {
}
