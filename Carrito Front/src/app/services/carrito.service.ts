import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Cart, ItemCarrito } from '../models/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private httpClient: HttpClient) {  }

  get(){
    return this.httpClient.get('https://localhost:44309/api/carrito')
  }

  delete(NroFactura: number, NroItem: number){
    return this.httpClient.delete(`https://localhost:44309/api/carrito/`+NroItem+`/`+NroFactura)
  }

  post(cart: Cart){
    return this.httpClient.post(`https://localhost:44309/api/carrito/`,cart)
  }

}
