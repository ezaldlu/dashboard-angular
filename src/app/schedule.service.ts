import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  baseUrl:string = "https://ixt.eid-tools.com/rest/UserOnShift";
  constructor(private httpClient : HttpClient) { }

  getShiftSchedule(){
    return this.httpClient.get(this.baseUrl);
  }

}
