import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carrito-table',
  templateUrl: './carrito-table.component.html',
  styleUrls: ['./carrito-table.component.css']
})
export class CarritoTableComponent implements OnInit {


  @Input() columnNames: string[];
  @Input() columnValues: any[];
  @Output() deleteItemEvent = new EventEmitter<any>();
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
    console.log(this.columnValues);

  }

  toggleSaveMode(id: number) {
    this.columnValues = this.columnValues.map((item) => {
      if (item.NroItem === id) {
        item.editing = false;
      }
      return item;
    })

  }
}
