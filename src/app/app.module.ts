// ANGULAR
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// RXJS
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// IONIC
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// THESE WILL BE REPLACED BY STORE
import { ScheduleService } from '../services/schedule.service';

// FANX
import { MyApp } from './app.component';
import { PAGES } from '../pages';
import { COMPONENTS } from '../components';
import { STORES, EFFECTS, PROVIDERS, metaReducers } from './store';

@NgModule({
  declarations: [
    MyApp,
    ...PAGES,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, { tabPlacement: 'bottom', tabsHideOnSubPages: true }),
    StoreModule.forRoot(STORES, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    EFFECTS
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ...PAGES,
    ...COMPONENTS
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScheduleService, // will be removed
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ...PROVIDERS
  ]
})
export class AppModule {}
