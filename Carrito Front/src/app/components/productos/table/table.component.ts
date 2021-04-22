import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Cart } from 'src/app/models/carrito';
import { Producto } from 'src/app/models/productos';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() columnsName: string[];
  @Input() columnsValue: any[];
  @Output() addItemEvent = new EventEmitter<any[]>();
  @Output() deleteItemEvent = new EventEmitter<any>();




  constructor(


  ) { }

  ngOnInit(): void {


  }



  addButtonClicked(item: any, quant: number) {

 
    console.log(quant);
    if (quant == 0) {
      alert("Ingrese una cantidad");
      return;

    }
    

    // let params = [item, quant];
    this.addItemEvent.emit([item,quant]);
  }

  trashButtonClicked(item: any) {
    if (confirm("Está seguro que desea borrar?")) {
      this.deleteItemEvent.emit(item);
    }
  }
}
