import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from './productos.component';



const routes: Routes = [
  {
    path: '',
    component: ProductosComponent
  },
  { path: 'prodCreation', loadChildren: () => import('./prod-creation/prod-creation.module').then(m => m.ProdCreationModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }