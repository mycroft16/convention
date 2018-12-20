import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MorePage {

  constructor(public navCtrl: NavController) {

  }

}
