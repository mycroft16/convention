import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import * as moment from 'moment';

import { DataService } from '../../services/data.service';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  fanX: any;
  scheduleDays: any;
  selectedDate: string;
  
  eventTypeList: any;
  fandomList: any;
  eventType: string = 'All';
  fandom: string = 'All';
  
  constructor(public navCtrl: NavController, public uniqueDeviceId: UniqueDeviceID, public dataService: DataService, public scheduleService: ScheduleService) {

  }
  
  readFandoms() {
    this.dataService.readFandoms().subscribe((data: any) => {
      console.log('readFandoms: ', data);
      this.fandomList = data;
    },
    (err) => {
      console.log('readFandoms ERROR: ', err);
    });
  }
  
  readEventTypes() {
    this.dataService.readEventTypes().subscribe((data: any) => {
      console.log('readEventTypes: ', data);
      this.eventTypeList = data;
    },
    (err) => {
      console.log('readEventTypes ERROR: ', err);
    });
  }
  
  readFanxes() {
    this.scheduleService.readFanxes().subscribe((data: any) => {
      console.log('readFanxes: ', data);
      this.fanX = data['selected'];
      
      sessionStorage.setItem('selected', JSON.stringify(this.fanX));
      sessionStorage.setItem('conList', JSON.stringify(data['cons']));
      
      this.generateSegments();
      
    },
    (err) => {
      console.log('readFanxes ERROR: ', err);
    });
  }
  
  generateSegments() {
    const start = moment(this.fanX.startDate);
    const end = moment(this.fanX.endDate);
    const dayCount = end.diff(start, 'days');
    
    let scheduleDaysTemp = [];
    for (let i = 0; i <= dayCount; i++) {
      const currentDate = moment(this.fanX.startDate).add(i, 'days').format('YYYY-MM-DD');
      const currentDisplay = moment(currentDate).format('MMM Do');
      
      scheduleDaysTemp.push({ "date": currentDate, "display": currentDisplay });
    }
    this.scheduleDays = scheduleDaysTemp;
    this.selectedDate = this.scheduleDays[0].date;
    
    this.readByDate();
    
  }
  
  readByDate() {
    this.scheduleService.readByDate(this.eventType, this.fandom, this.selectedDate).subscribe((data: any) => {
      console.log('read: ', data);
    },
    (err) => {
      console.log('read ERROR: ', err);
    });
  }
  
  getUUID() {
//    this.uniqueDeviceId.get()
//      .then((uuid: any) => {
//        console.log('uuid: ', uuid);
//      })
//      .catch((error: any) => {
//        console.log('uuid ERROR: ', error);
//      });
    sessionStorage.setItem('uuid', '63ff9ddc-32ea-3014-3554-200901462018');
  }
  
  ionViewDidEnter() {
    
    this.readFandoms();
    this.readEventTypes();
    
    if (typeof this.scheduleDays === 'undefined' || sessionStorage.getItem('selected') === null) {
      this.readFanxes();
    }
    if (sessionStorage.getItem('uuid') === null) {
      this.getUUID();
    }
  }

}
