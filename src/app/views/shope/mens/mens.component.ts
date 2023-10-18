import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})


export class MensComponent {
  dataproducts : Products[]=[]

  constructor(public route : Router , public serviceproducts: ProductsService){
 
  }
  ngOnInit(){
    this.serviceproducts.getmensproducts().subscribe((res:any)=>{
   this.dataproducts=   res
  })
}
}