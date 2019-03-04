import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

   baseUrl:string = "https://ixt.eid-tools.com/rest/test";
  constructor(private httpClient : HttpClient) { }

  getTotalCustomer(){
    return this.httpClient.get(this.baseUrl);
  }
}
