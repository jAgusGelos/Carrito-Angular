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


  columnsNames = ["idArticulo","nombre","descripcion","precio"];
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

  addProduct(params: any) {
    let producto = params.item;
    let quant = params.quant;

    // this.cart = new Cart();
    // this.cart.NroFactura = 2;
    // this.cart.NroItem = 0;
    // this.cart.codProd = producto.idArticulo;
    // this.cart.cantProd = cant;


    //-----------Version JAVASCRIPT -------------------- 1 sola instrucción
    this.cart = {
      NroFactura:2,
      NroItem: 0,
      codProd: producto.idArticulo,
      cantProd: quant
    }
    console.log(this.cart);
    this.carritoService.post(this.cart).subscribe((res:any) => alert('Se ha cargado el articulo correctamente.'+producto.nombre));
    ;

  }


  deleteProduct(prod: Producto){
    this.productosService.delete(prod).subscribe((res:any) => alert('Success'));
    this.getProductos();

  }



}
