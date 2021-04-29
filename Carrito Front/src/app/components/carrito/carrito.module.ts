import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { CarritoComponent } from './carrito.component';
import { CarritoTableComponent } from './carrito-table/carrito-table.component';
import { HeaderComponent } from '../productos/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    CarritoRoutingModule,
    
  ],
  declarations: [CarritoComponent, CarritoTableComponent]
})
export class CarritoModule { }