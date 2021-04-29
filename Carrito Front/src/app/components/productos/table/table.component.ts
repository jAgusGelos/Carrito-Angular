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
  @Output() addItemEvent = new EventEmitter<any>();
  @Output() deleteItemEvent = new EventEmitter<any>();
  editMode: boolean = false;




  constructor(


  ) { }

  ngOnInit(): void {


  }
  ngOnChanges(): void {
    console.log(this.columnsValue);
  }



  addButtonClicked(item: any) {
    // -------------------- Duda ------------ >> A donde pongo esta comprobación?.
    if (item.quant == 0) {
      alert("Ingrese una cantidad");
      return;
    }
    
    this.addItemEvent.emit(item);

  }

  trashButtonClicked(item: any) {
    if (confirm("Está seguro que desea borrar?")) {
      this.deleteItemEvent.emit(item);
    }
  }

  toggleEditMode(id: number) {    
    this.columnsValue = this.columnsValue.map((item) => {
      if (item.idArticulo === id) {
        item.editing = true;
        return item;
      }
      return item;
    })
    console.log(this.columnsValue);

  }

  toggleSaveMode(id: number) {   

    this.columnsValue = this.columnsValue.map((item) => {
      if (item.idArticulo === id) {
        console.log(item.quant)
        item.editing = false;
        return item;
      }
      return item;
    })




  }
}
