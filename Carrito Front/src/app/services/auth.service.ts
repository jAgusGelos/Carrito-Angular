import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IUserInfo } from '../models/IUserInfo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string;

  constructor(private httpClient: HttpClient) {
    this.apiURL = 'https://reqres.in/api/login/'

   }

  

  login(usr: IUserInfo) {
       return this.httpClient.post(this.apiURL,usr)
  }

}
