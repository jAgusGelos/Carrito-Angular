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
  ngOnChanges(): void{
    console.log(this.columnsValue);
  }



  addButtonClicked(item: any, quant: number) {

 
    console.log(quant);
    if (quant == 0) {
      alert("Ingrese una cantidad");
      return;

    }
    let params = {item, quant};

    

    // let params = [item, quant];
    this.addItemEvent.emit(params);

    // Para hacerlo más util hago un objeto res o otro event emiter?
  }

  trashButtonClicked(item: any) {
    if (confirm("Está seguro que desea borrar?")) {
      this.deleteItemEvent.emit(item);
    }
  }

  toggleEditMode(id: number){

    this.editMode = !this.editMode;
    this.columnsValue = this.columnsValue.map((item) => {
      if (item.idArticulo === id){
        item.editing = true;
        return item;
      }
      return item;
    })
    console.log(this.columnsValue);

  }

  toggleSaveMode(id: number, quant: any){
    console.log(quant)
    this.editMode = !this.editMode;
 

    this.columnsValue = this.columnsValue.map((item) => {
      if (item.idArticulo === id){
        item.editing = false;
        item.quant = quant;
        return item;
      }
      return item;
    })
    console.log(this.columnsValue);
    


  }
}
