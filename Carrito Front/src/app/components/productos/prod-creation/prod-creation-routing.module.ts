import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdCreationComponent } from './prod-creation.component';



const routes: Routes = [
  {
    path: '',
    component: ProdCreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdCreationRoutingModule { }