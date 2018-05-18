import { Component } from '@angular/core';

import { CenterPage } from '../center/center';
import { AttentionPage } from '../attention/attention';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
import { MessagePage } from '../message/message';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AttentionPage;
  tab3Root = CenterPage;
  tab4Root = MessagePage;
  tab5Root = UserPage;

  constructor() {

  }
}
