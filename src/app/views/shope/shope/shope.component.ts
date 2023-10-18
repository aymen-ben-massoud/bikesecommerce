import { Component, ViewChild } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shope',
  templateUrl: './shope.component.html',
  styleUrls: ['./shope.component.css']
})
export class ShopeComponent {

  exist:boolean= true
  dataproducts : Products[]=[]
  border= 'borderactive'
   id:any
row: boolean = false
constructor(public route : Router , public serviceproducts: ProductsService,  private routee: ActivatedRoute,){}

ngOnInit(){
 
 
  this.serviceproducts.getAllProducts().subscribe((res:any)=>{
 this.dataproducts=   res})


 
}
async exist1(){
  if( (await this.route.navigate(['/shope/kids'])) ){
   this.exist= false
 
  }
  else{
   this.exist= true
   this.route.navigate(['/shope']).then(() => {
     window.location.reload();
   });
  
  }
 }
 
 
 async exist2(){
   if( (await this.route.navigate(['/shope/mens']) )){
    this.exist= false
  
   }
   else{
    this.exist= true
    this.route.navigate(['/shope']).then(() => {
     window.location.reload();
   });
 
   }
  }
 





 searchtext: string = ''
 onsearchtextentred(searchvalue: any){
 this.searchtext = searchvalue
 console.log(this.searchtext)
 }



rowfunction(){
  this.route.navigate(['/shope']).then(() => {
    window.location.reload();
  });
}


}
