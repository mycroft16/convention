import { Component } from '@angular/core';

import { EventsPage } from '../events/events';
import { GuestsPage } from '../guests/guests';
import { MorePage } from '../more/more';
import { SchedulePage } from '../schedule/schedule';
import { VendorsPage } from '../vendors/vendors';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SchedulePage;
  tab2Root = GuestsPage;
  tab3Root = VendorsPage;
  tab4Root = EventsPage;
  tab5Root = MorePage;

  constructor() {

  }
}
