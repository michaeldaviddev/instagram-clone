import {Component, ViewChild} from '@angular/core';
import {IonTabs} from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  selectedTab: any;
  @ViewChild('tabs') tabs: IonTabs;

  constructor() {}

  setCurrentTab(event) {
    this.selectedTab = this.tabs.getSelected();
  }
}
