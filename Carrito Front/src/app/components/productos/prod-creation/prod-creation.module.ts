import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdCreationRoutingModule } from './prod-creation-routing.module';
import { ProdCreationComponent } from './prod-creation.component';

@NgModule({
  imports: [
    CommonModule,
    ProdCreationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProdCreationComponent]
})
export class ProdCreationModule { }