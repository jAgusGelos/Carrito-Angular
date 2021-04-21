import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Input() columnsName: string [];


  EstadoForm: string;
 

  constructor(

    ) { }

  ngOnInit(): void {

    this.EstadoForm = "L"
    



  }



}
