import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import {RouterModule} from '@angular/router';
import { routing } from './app.routing';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AccountService } from './services/account.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { BibliografiaComponent } from './components/bibliografia/bibliografia.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    CarritoComponent,
    ClientesComponent,
    BibliografiaComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
    routing
  ],
  providers: [AuthGuardService, AccountService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
