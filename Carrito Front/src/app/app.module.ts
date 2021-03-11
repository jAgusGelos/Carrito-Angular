import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import {RouterModule} from '@angular/router';
import { routing } from './app.routing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './components/clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    CarritoComponent,
    ClientesComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
