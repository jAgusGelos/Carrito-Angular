import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Producto } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpClient: HttpClient) {  }

  get(){
    return  this.httpClient.get('https://localhost:44309/api/productos')
  }

  post(obj: Producto){
    return this.httpClient.post('https://localhost:44309/api/productos',obj)
  }

}
