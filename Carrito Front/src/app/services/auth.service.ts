import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { IUserInfo } from '../models/IUserInfo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string;

  constructor(private httpClient: HttpClient, private cookies: CookieService) {
    this.apiURL = 'https://reqres.in/api/login/'

   }

  

  login(usr: IUserInfo) {
       return this.httpClient.post(this.apiURL,usr);
  }
  
  setToken(token: string){
    this.cookies.set('token', token, {expires: 0.1});
  }
  getToken(){
    return this.cookies.get('token')
  }

  logout(){
    this.cookies.delete('token')
  }
}
