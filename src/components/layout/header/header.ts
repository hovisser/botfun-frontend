import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WithRender from './header.tpl.html';
import './header.scss';

@WithRender
@Component({})
export default class Header extends Vue {
  get logo(): ImageData {  
    return  require('@/assets/images/logo.png');
  }
    
  get money() : number{    
    return this.$store.getters.money;
  } 

  expand() {
    const x = document.getElementById("myTopnav") as HTMLElement;
    if(x) {
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
    
  }

}
