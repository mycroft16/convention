import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-guests',
  templateUrl: 'guests.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuestsPage {

  constructor(public navCtrl: NavController) {

  }

}
