import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl:string = "https://ixt.eid-tools.com/rest/view_project_average_done";
  constructor(private httpClient : HttpClient) { }

  getRole(){
    return this.httpClient.get(this.baseUrl);
  }
}
