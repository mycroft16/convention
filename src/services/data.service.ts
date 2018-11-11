import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class DataService {
  
  apiUrl = 'http://fanx.wherearethelights.com/api/data';
  
  constructor(private http: HttpClient) {
    
  }
  
  readFandoms() {
    return this.http.get(this.apiUrl + '/readFandoms.php');
  }
  
  readEventTypes() {
    return this.http.get(this.apiUrl + '/readEventTypes.php');
  }
  
}