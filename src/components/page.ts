import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import WithRender from './page.tpl.html';
import Header from './layout/header/header';
import Footer from './layout/footer/footer';

import './page.scss';

@WithRender
@Component({
  components: {
    theader: Header,
    tfooter: Footer,
  },
})
export default class Page extends Vue {
}
