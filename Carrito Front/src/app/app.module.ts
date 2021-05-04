import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { routing } from './app.routing';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';

import { AuthGuardService } from './services/auth-guard.service';

import { AuthInterceptorService } from './services/auth-interceptor.service';
import { BibliografiaComponent } from './components/bibliografia/bibliografia.component';
import { CookieService } from 'ngx-cookie-service';
import { CarritoDialogComponent } from './components/dialogs/carrito-dialog/carrito-dialog.component';







@NgModule({
  declarations: [
    AppComponent,
      BibliografiaComponent,
      CarritoDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,   
    routing, 
    
    
    
  ],
  providers: [AuthGuardService, CookieService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
