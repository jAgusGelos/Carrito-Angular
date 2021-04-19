import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProductosComponent]
})
export class ProductosModule { }