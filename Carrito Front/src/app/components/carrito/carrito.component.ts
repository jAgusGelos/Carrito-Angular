import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import {ItemCarrito} from '../../models/carrito';
import * as $ from "jquery";
import { BillService } from 'src/app/services/bill.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})


export class CarritoComponent implements OnInit {

  columnNames: string[] = ['Nombre','Descripcion', 'Precio', 'Cantidad', 'Total' ]; 
  columnValues: any[];  
  Items: ItemCarrito[];
  acu: number = 0;


  constructor(
    private carritoService: CarritoService,
    private billService: BillService) { }

  ngOnInit(): void {
    this.getCarrito(); 
  }

  getCarrito(){
    this.carritoService.get().subscribe((res: ItemCarrito[]) =>  {
      this.columnValues = res;
      
    }
   );   
  }
  


  deleteProduct(prod){
    console.log(prod);
    this.carritoService.delete(prod.NroFactura, prod.NroItem).subscribe(res => this.getCarrito());      
  }

  limpiarCarrito(){
    this.carritoService.get().subscribe((res:ItemCarrito[]) =>{
      res.forEach((item) => this.deleteProduct(item))
    })
  }

  meLoLlevo(){

  
  }

}
