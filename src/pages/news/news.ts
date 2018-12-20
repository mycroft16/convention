import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsPage {

  constructor(public navCtrl: NavController) {

  }

}
