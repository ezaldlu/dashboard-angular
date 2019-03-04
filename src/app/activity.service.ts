import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
baseUrl:string = "https://ixt.eid-tools.com/rest/getUserAchievement";
  constructor(private httpClient : HttpClient) { }

  getAchievement(){
    return this.httpClient.get(this.baseUrl);
  }
}
