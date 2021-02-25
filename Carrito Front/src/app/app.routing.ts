import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { AppComponent } from './app.component';

const appRoutes = [
    { path: 'productos', component: ProductosComponent,  pathMatch: 'full'}
  ];

  export const routing = RouterModule.forRoot(appRoutes);