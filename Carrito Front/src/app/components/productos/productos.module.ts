import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';


@NgModule({
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProductosComponent, HeaderComponent, TableComponent ],//aca van los comp //agregar array exports
  exports: [HeaderComponent, TableComponent ]
})
export class ProductosModule { } 