import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppStore } from '../../app/store/app.store';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingPage {

  constructor(public navCtrl: NavController, private store: AppStore) {

    if (!!localStorage.getItem('token')) {
      this.store.dispatch(factory => factory.auth.setLoginToken(localStorage.getItem('token')));
    } else {
      this.store.dispatch(factory => factory.auth.getAuthToken());
    }
    this.proceed();

  }

  proceed() {
    this.store.select(state => state.auth.authToken).subscribe((token) => {
      if (!!token) {
        this.navCtrl.setRoot(TabsPage);
      }
    });
  }

}
