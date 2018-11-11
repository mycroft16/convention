import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ScheduleService {
  
  apiUrl = 'http://fanx.wherearethelights.com/api/schedule';
  
  constructor(private http: HttpClient) {
    
  }
  
  readFanxes() {
    return this.http.get(this.apiUrl + '/readFanxes.php');
  }
  
  readByDate(itemType, fandom, date) {
    return this.http.get(this.apiUrl + '/readByDate.php?itemType=' + itemType + '&fandom=' + fandom + '&date=' + date);
  }
  
}