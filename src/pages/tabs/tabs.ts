import { Component } from '@angular/core';

import { EventsPage } from '../events/events';
import { GuestsPage } from '../guests/guests';
import { SchedulePage } from '../schedule/schedule';
import { ScheduleMinePage } from '../schedule-mine/schedule-mine';
import { VendorsPage } from '../vendors/vendors';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SchedulePage;
  tab2Root = ScheduleMinePage;
  tab3Root = GuestsPage;
  tab4Root = VendorsPage;
  tab5Root = EventsPage;

  constructor() {

  }
}
