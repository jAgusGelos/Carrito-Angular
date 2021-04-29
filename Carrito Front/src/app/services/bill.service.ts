import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../models/carrito';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  apiURL: string;
  constructor(private httpClient: HttpClient) { 
    this.apiURL = '';
  }

  post(cart: Cart[]){
    return this.httpClient.post(this.apiURL,cart)
  }


}
