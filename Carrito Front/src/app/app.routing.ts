import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'productos',
    loadChildren: () => import('./components/productos/productos.module').then(m => m.ProductosModule)
  },
  { path: 'clientes', loadChildren: () => import('./components/clientes/clientes.module').then(m => m.ClientesModule) },
  { path: 'carrito', loadChildren: () => import('./components/carrito/carrito.module').then(m => m.CarritoModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);