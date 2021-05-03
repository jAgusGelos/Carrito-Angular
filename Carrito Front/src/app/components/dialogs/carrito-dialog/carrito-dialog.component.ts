import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CarritoDialogData } from 'src/app/models/DialogData';

@Component({
  selector: 'app-carrito-dialog',
  templateUrl: './carrito-dialog.component.html',
  styleUrls: ['./carrito-dialog.component.css']
})
export class CarritoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CarritoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CarritoDialogData) { }
  

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(): void {
    this.dialogRef.close();
  }

}
