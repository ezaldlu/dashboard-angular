import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // baseUrl:string = "https://ixt.eid-tools.com/rest/";
  constructor(private httpClient : HttpClient) { }

  getUserDetails(email, password){
    // post these details to API Server return user info if correct.
    return this.httpClient.post('https://ixt.eid-tools.com/rest/login_auth', {
      email,
      password
    }).subscribe(data => {
      console.log(data, " is what we got from the server.")
    })
    
  }
}
