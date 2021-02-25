import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  Items: Producto[] = [];
  FormReg: FormGroup;
  EstadoForm: string;
  Prod: Producto;

  constructor(
    private productosService: ProductosService,
    public formBuilder : FormBuilder
    ) { }

  ngOnInit(): void {

    this.EstadoForm = "L"
    this.getProductos();
    this.FormReg = this.formBuilder.group(
      {
        nombreProd: ['',[Validators.required,Validators.minLength(2), Validators.maxLength(100)]],
        descProd: ['',[Validators.required,Validators.minLength(2), Validators.maxLength(100)]],
        precioProd: ['',[Validators.required]],
      }
    );


  }

  getProductos(){
    this.productosService.get().subscribe((res: Producto[]) =>  this.Items = res );

  }

  agregar(){
    this.FormReg.reset(this.FormReg.value)
    this.EstadoForm = "E";
  }

  volver(){
    this.EstadoForm = "L";
    this.getProductos();
  }

  guardar(){
    if(this.FormReg.invalid){
      window.alert("Complete los campos");
      return;
    }
    
    this.Prod = new Producto();
    this.Prod.nombre = this.FormReg.value.nombreProd;
    this.Prod.descripcion = this.FormReg.value.descProd;
    this.Prod.precio = this.FormReg.value.precioProd;

    this.productosService.post(this.Prod).subscribe((res: any) => {
      this.FormReg.reset();
      this.volver();
    })


  }

}
