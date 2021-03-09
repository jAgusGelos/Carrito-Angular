import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { ItemCarrito } from '../models/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private httpClient: HttpClient) {  }

  get(){
    return this.httpClient.get('https://localhost:44309/api/carrito')
  }

  delete(NroFactura: number, NroItem: number){
    return this.httpClient.delete<void>(`https://localhost:44309/api/carrito?NroFactura=${NroFactura}&NroItem=${NroItem}`)
  }

}
