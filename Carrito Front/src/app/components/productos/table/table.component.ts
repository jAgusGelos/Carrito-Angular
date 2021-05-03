import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


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




  constructor(


  ) { }

  ngOnInit(): void {


  }




  addButtonClicked(item: any) {
    // -------------------- Duda ------------ >> A donde pongo esta comprobación?.
    console.log(item.quant)
    if (item.quant == 0 || item.quant == undefined) {
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
      }
      return item;
    })
    console.log(this.columnsValue);

  }

  toggleSaveMode(id: number) { 
    this.columnsValue = this.columnsValue.map((item) => {
      if (item.idArticulo === id) {
        item.editing = false;
      }
      return item;
    })




  }
}
