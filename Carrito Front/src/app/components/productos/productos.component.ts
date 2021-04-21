import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/carrito';
import { Producto } from 'src/app/models/productos';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  columnsNames = ["id", "name", "year", "color", "pantone_value"];
  columnsValues: Producto[];
  cart: Cart;




  constructor(private productosService: ProductosService,
    private carritoService: CarritoService,
  ) { }

  ngOnInit(): void {
    this.getProductos();





  }


  getProductos() {
    this.productosService.get().subscribe((res: any) => this.columnsValues = res);


  }

  addProduct(params: any[]) {
    // HARCODEADO -- REVISAR MAÑANA
    let producto = params[0];
    let cant = params[1];

    this.cart = new Cart();
    this.cart.NroFactura = 2;
    this.cart.NroItem = 0;
    this.cart.codProd = producto.idArticulo;
    this.cart.cantProd = cant;
    console.log(this.cart);
    this.carritoService.post(this.cart).subscribe((res:any) => alert('Se ha cargado el articulo correctamente.' + res));
    ;

  }


  deleteProduct(prod: Producto){
    this.productosService.delete(prod).subscribe((res:any) => alert('Success'))

  }



}
