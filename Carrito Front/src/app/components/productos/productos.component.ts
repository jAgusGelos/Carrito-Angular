import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  EstadoForm: string;
 

  constructor(

    ) { }

  ngOnInit(): void {

    this.EstadoForm = "L"
    



  }



}
