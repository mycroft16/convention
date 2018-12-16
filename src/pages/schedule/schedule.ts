import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { AppStore } from '../../app/store/app.store';
import { IEventType, IFandom } from '../../app/shared/interfaces/dropdowns.interface';

import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  fanX: any;
  scheduleDays: any;
  selectedDate: string;
  
  public eventTypeList: Observable<IEventType[]>;
  public fandomList: Observable<IFandom[]>;
  eventType: string = 'All';
  fandom: string = 'All';
  
  constructor(public navCtrl: NavController, public scheduleService: ScheduleService, private store: AppStore) {
    this.eventTypeList = this.store.select(state => state.dropdowns.eventTypes);
    this.fandomList = this.store.select(state => state.dropdowns.fandoms);
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

  loadDropdowns() {
    this.store.dispatch(factory => factory.dropdowns.getDropdownData());
  }
  
  ionViewDidEnter() {
    this.loadDropdowns();
  }

}
