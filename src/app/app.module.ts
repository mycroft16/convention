import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { EventsPage } from '../pages/events/events';
import { GuestsPage } from '../pages/guests/guests';
import { NewsPage } from '../pages/news/news';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleMinePage } from '../pages/schedule-mine/schedule-mine';
import { TabsPage } from '../pages/tabs/tabs';
import { VendorsPage } from '../pages/vendors/vendors';

import { DataService } from '../services/data.service';
import { ScheduleService } from '../services/schedule.service';

import { HttpClientModule } from '@angular/common/http';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    EventsPage,
    GuestsPage,
    NewsPage,
    SchedulePage,
    ScheduleMinePage,
    TabsPage,
    VendorsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsPage,
    GuestsPage,
    NewsPage,
    SchedulePage,
    ScheduleMinePage,
    TabsPage,
    VendorsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    ScheduleService,
    UniqueDeviceID,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
