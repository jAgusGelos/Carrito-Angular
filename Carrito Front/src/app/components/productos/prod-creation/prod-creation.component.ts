import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-prod-creation',
  templateUrl: './prod-creation.component.html',
  styleUrls: ['./prod-creation.component.css']
})
export class ProdCreationComponent implements OnInit {

  FormReg: FormGroup;
  Prod: Producto;


  constructor(
    private productosService: ProductosService,
    public formBuilder : FormBuilder,
    private route: Router,
    ) { }

  ngOnInit(): void {
    
    this.FormReg = this.formBuilder.group(
      {
        nombreProd: ['',[Validators.required,Validators.minLength(2), Validators.maxLength(100)]],
        descProd: ['',[Validators.required,Validators.minLength(2), Validators.maxLength(100)]],
        precioProd: ['',[Validators.required]],
      }
    );


  }


  saveProduct(){
    if(this.FormReg.invalid){
      window.alert("Complete los campos");
      return;
    }
    
    this.Prod = new Producto();
    this.Prod.nombre = this.FormReg.value.nombreProd;
    this.Prod.descripcion = this.FormReg.value.descProd;
    this.Prod.precio = this.FormReg.value.precioProd;

    this.productosService.post(this.Prod).subscribe((res: any) => {
      alert('Carga Completada');
      this.FormReg.reset();
    })


  }

  volver(){
    this.route.navigateByUrl('productos');
  }


}
