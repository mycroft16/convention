import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-schedule-mine',
  templateUrl: 'schedule-mine.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleMinePage {

  constructor(public navCtrl: NavController) {

  }

}
