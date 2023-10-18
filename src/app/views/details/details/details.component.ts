import { Toast, ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id:any
  products :any =[]
  buy2  : boolean= false
  BUY='buy now'

constructor( private route: ActivatedRoute, private productservice: ProductsService ,private local : LocalstorageService, private toastr:ToastrService){}

ngOnInit(){
  this.id = this.route.snapshot.paramMap.get('id');
  this.getproductbyid()
  this.buyit()
}


getproductbyid(){
  this.productservice.getproductbyid(this.id).subscribe((res:any)=>{
this.products = res
this.products.id = this.id;
  })
}

buy() {
  this.local.addProduct(this.products);

  if ('cart' in localStorage) {
    this.local.getCartObs().subscribe((test: any) => {
      this.products = test.map((elem: any) => { 
      

        if (elem.id === this.id) {
        
          this.BUY = 'DONE'
         this.buy2= true
        } else{
          this.BUY = 'BUY'
          this.buy2= false
           
         
        }
      });
    });
  }
  
 this.getproductbyid() 
}
buyit(){

  if ('cart' in localStorage) {
    this.local.getCartObs().subscribe((test: any) => {
      this.products = test.map((elem: any) => { 
      
  
        if (elem.id === this.id) {
         
          this.BUY = 'DONE'
          this.buy2= true
        } else{
          this.BUY ='BUY'
          this.buy2= false
          this.toastr.success('product has  added', 'SUCCESS');
        }
      });
    });
  }
  
  this.getproductbyid() 
  }
}
