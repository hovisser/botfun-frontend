import './header.scss';

import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import WithRender from './header.tpl.html';

@WithRender
@Component({})
export default class Header extends Vue {
}
