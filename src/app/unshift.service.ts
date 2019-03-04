import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnshiftService {

  baseUrl:string = "https://ixt.eid-tools.com/rest/UserUnShift";
  constructor(private httpClient : HttpClient) { }

  getUserOff(){
    return this.httpClient.get(this.baseUrl);
  }
}
