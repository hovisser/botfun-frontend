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

  public money = 0;
    
  async mounted() {
      this.money =  await this.getMoney();
  }

  async getMoney() : Promise<number> {
      const infoResult = await fetch(`http://localhost:3001/api/v1/account/money`, {
          credentials: 'include'
      });
      
      return await infoResult.json() as number;
  }

}
