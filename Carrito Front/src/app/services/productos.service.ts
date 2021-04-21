import { Injectable } from '@angular/core';
import {mockProducts} from "../mocks/mockProducts"

import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Producto } from '../models/productos';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpClient: HttpClient) {  }

  get(){
    return  this.httpClient.get('https://localhost:44309/api/productos')
    //return  this.httpClient.get('api/productos')
    return of(mockProducts);
  }

  post(obj: Producto){
    return this.httpClient.post('https://localhost:44309/api/productos',obj)
  }

  delete(obj: Producto){
    return this.httpClient.delete('https://localhost:44309/api/productos/' +  obj.idArticulo)
  }

}
