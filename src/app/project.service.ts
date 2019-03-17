import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl:string = "https://ixt.eid-tools.com/rest/getTotalNetworkIntegration";
  constructor(private httpClient : HttpClient) { }

  getEventActivity(){
    return this.httpClient.get(this.baseUrl);
  }
}
