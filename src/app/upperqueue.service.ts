import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpperqueueService {

  baseUrl:string = "https://ixt.eid-tools.com/rest/upper_queue";
  constructor(private httpClient : HttpClient) { }

  getValueUpperQueue(){
    return this.httpClient.get(this.baseUrl);
  }
}
