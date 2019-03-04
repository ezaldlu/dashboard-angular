import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryunitService {

  baseUrl:string = "https://ixt.eid-tools.com/rest/getTicketCu";
  constructor(private httpClient : HttpClient) { }

  getTicketCountryUnit(){
    return this.httpClient.get(this.baseUrl);
  }
  
}
