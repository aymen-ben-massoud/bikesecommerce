import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {
  dataproducts : Products[]=[]

  constructor(public route : Router , public serviceproducts: ProductsService){
 
  }
  ngOnInit(){
    this.serviceproducts.getkidsproducts().subscribe((res:any)=>{
   this.dataproducts =   res
  })
}
}
