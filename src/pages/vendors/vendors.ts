import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-vendors',
  templateUrl: 'vendors.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VendorsPage {

  constructor(public navCtrl: NavController) {

  }

}
