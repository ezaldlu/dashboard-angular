import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryqueueService {

  baseUrl:string = "https://ixt.eid-tools.com/rest/view_project_average_queue";
  constructor(private httpClient : HttpClient) { }

  getRoleQueue(){
    return this.httpClient.get(this.baseUrl);
  }
}
