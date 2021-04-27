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
  acu: number = 0;

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.getCarrito();

    
  }

  getCarrito(){
    this.carritoService.get().subscribe((res: ItemCarrito[]) =>  {
      this.Items = res;
      this.getTotal();
    }
   );   
  }
  
  getTotal(){
    // Este codigo seguro puede mejorar    
    // for (let i = 0; i < this.Items.length; i++)  {
    //   this.acu += this.Items[i].Total;
    // }
    this.Items.forEach((item) => {
      this.acu += item.Total;
    })
  }

  quitarProducto(prod){
    console.log(prod);
    this.carritoService.delete(prod.NroFactura, prod.NroItem).subscribe(res => this.getCarrito());      
  }

  limpiarCarrito(){
    this.carritoService.get().subscribe((res:ItemCarrito[]) =>{
      res.forEach((item) => this.quitarProducto(item))
    })
  }

  meLoLlevo(){
    this.
  }

}
