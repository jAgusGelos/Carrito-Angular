import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';

@NgModule({
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  declarations: [ProductosComponent]
})
export class ProductosModule { }