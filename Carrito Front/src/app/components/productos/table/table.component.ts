import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Cart } from 'src/app/models/carrito';
import { Producto } from 'src/app/models/productos';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() columnsName: string [];
  @Output() newItemEvent = new EventEmitter<string>();

  Items: any[];
  EstadoForm: string;
  Prod: Producto;
  cart: Cart;

  constructor(
    private productosService: ProductosService,
    private carritoService: CarritoService,
    ) { }

  ngOnInit(): void {   
    this.getProductos();
    
  }

  getProductos(){
    this.productosService.get().subscribe((res: any[]) =>  this.Items = res );    
    // cambiar de lugar

  }


  agregarProducto(producto: any){
    let cant = document.getElementById('cant-'+ producto.idArticulo);
    console.log($(cant).val().toString());
    if($(cant).val().toString() == ''){
      alert("Ingrese una cantidad")
      return;
      
    }
    
    let value = producto.id;  
    this.newItemEvent.emit(value);
    console.log('Llego 1')
         


   

    this.cart = new Cart();
    this.cart.NroFactura = 2;
    this.cart.NroItem = 0;
    this.cart.codProd = producto.idArticulo;      
    this.cart.cantProd =parseInt($(cant).val().toString());
    console.log(this.cart);
    this.carritoService.post(this.cart).subscribe();
    alert('Se ha cargado el articulo correctamente.');    

  }

  addButtonClicked(item: any){
    this.newItemEvent.emit(item);
  }
}
