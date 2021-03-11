import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { AppComponent } from './app.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ClientesComponent } from './components/clientes/clientes.component';

const appRoutes = [
    { path: 'productos', component: ProductosComponent,  pathMatch: 'full'},
    { path: 'carrito', component: CarritoComponent,  pathMatch: 'full'},
    { path: 'clientes', component: ClientesComponent,  pathMatch: 'full'}
  ];

  export const routing = RouterModule.forRoot(appRoutes);