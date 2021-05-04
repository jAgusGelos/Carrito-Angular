import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito-table',
  templateUrl: './carrito-table.component.html',
  styleUrls: ['./carrito-table.component.css']
})
export class CarritoTableComponent implements OnInit {


  @Input() columnNames: string[];
  @Input() columnValues: any[];
  @Output() deleteItemEvent = new EventEmitter<any>();
  @Output() putItemEvent = new EventEmitter<any>();
  acu: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.columnValues) {
      this.getTotal();
    }
  }

  getTotal() {
    this.acu = 0;
    this.columnValues.forEach((item) => {
      this.acu += item.Total;
    })
  }

  toggleRemoveMode(item) {
    this.deleteItemEvent.emit(item);
    // REVISAR ESTA INSTRUCCION;
    this.getTotal();
  }

  toggleEditMode(id: number) {
    this.columnValues = this.columnValues.map((item) => {
      if (item.NroItem === id) {
        item.editing = true;
      }
      return item;
    })
  }

  toggleSaveMode(item: any) {
    console.log(item)
    
    this.columnValues = this.columnValues.map((items) => {
      if (items.NroItem === item.NroItem) {
        items.editing = false;        
      }
      return items;
    })
    // this.putItemEvent.emit(this.columnValues.find(items => (items.NroItem === item.NroItem) ));
  



  }
}
