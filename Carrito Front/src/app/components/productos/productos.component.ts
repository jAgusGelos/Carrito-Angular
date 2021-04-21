import { Component,  OnInit } from '@angular/core';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  
  names = ["id","name","year","color","pantone_value"];


 
 

  constructor(

    ) { }

  ngOnInit(): void { 
    



  }

  showId(item: any){
    console.log('Llego')
    console.log(item)

  }



}
