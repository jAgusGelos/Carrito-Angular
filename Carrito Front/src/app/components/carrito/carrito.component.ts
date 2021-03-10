import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import {ItemCarrito} from '../../models/carrito';
import * as $ from "jquery";


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {


  Items: ItemCarrito[];

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.getCarrito();
  }

  getCarrito(){
    this.carritoService.get().subscribe((res: ItemCarrito[]) =>  this.Items = res );
  
  }

  quitarProducto(prod){
    console.log(prod);
    this.carritoService.delete(prod.NroFactura, prod.NroItem).subscribe();
    this.getCarrito();
    
  }

}
