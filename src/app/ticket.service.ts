import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  baseUrl:string = "https://ixt.eid-tools.com/rest/UserActive";
  constructor(private httpClient : HttpClient) { }

  getTicket(){
    return this.httpClient.get(this.baseUrl);
  }
}
