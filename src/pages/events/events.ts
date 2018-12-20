import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsPage {

  constructor(public navCtrl: NavController) {

  }

}
