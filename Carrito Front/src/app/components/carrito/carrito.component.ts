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
    this.carritoService.get().subscribe((res: ItemCarrito[]) =>  {
      this.Items = res;
      this.getTotal();
    }
   );   
  }
  
  getTotal(){
    // Este codigo seguro puede mejorar 
    let acu = 0;
    console.log(this.Items)
    for (let i = 0; i < this.Items.length; i++)  {
      acu += this.Items[i].Total;
    }
    console.log(acu);
    document.getElementById('precio').innerText = acu.toString();

  }

  quitarProducto(prod){
    console.log(prod);
    this.carritoService.delete(prod.NroFactura, prod.NroItem).subscribe(res => this.getCarrito());      
  }

}
