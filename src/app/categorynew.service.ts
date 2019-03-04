import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorynewService {

  baseUrl:string = "https://ixt.eid-tools.com/rest/view_project_average_ongoing";
  constructor(private httpClient : HttpClient) { }

  getRoleNew(){
    return this.httpClient.get(this.baseUrl);
  }
}
