import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryincService {

  baseUrl:string = "https://ixt.eid-tools.com/rest/view_project_average_incomplete";
  constructor(private httpClient : HttpClient) { }

  getRoleInc(){
    return this.httpClient.get(this.baseUrl);
  }
}
