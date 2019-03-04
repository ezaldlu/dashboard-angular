import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {

  baseUrl:string = "https://ixt.eid-tools.com/rest/UserOnShiftIndicator";
  constructor(private httpClient : HttpClient) { }

  getIndicator(){
    return this.httpClient.get(this.baseUrl);
  }
}
