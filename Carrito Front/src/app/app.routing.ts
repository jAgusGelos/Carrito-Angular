import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'productos',
    loadChildren: () => import('./components/productos/productos.component').then(m => m.ProductosComponent)
  },
  { path: 'clientes', loadChildren: () => import('./components/clientes/clientes.component').then(m => m.ClientesComponent) },
  { path: 'carrito', loadChildren: () => import('./components/carrito/carrito.component').then(m => m.CarritoComponent) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);