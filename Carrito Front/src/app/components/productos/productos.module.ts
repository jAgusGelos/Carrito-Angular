import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { ProdCreationComponent } from './prod-creation/prod-creation.component';

@NgModule({
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProductosComponent, HeaderComponent, TableComponent, ProdCreationComponent] //aca van los comp //agregar array exports
})
export class ProductosModule { } 