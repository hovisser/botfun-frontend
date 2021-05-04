import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import WithRender from './header.tpl.html';
import './header.scss';

@WithRender
@Component({})
export default class Header extends Vue {
  get logo() {  
    return  require('@/assets/images/logo.png');
  }
}
