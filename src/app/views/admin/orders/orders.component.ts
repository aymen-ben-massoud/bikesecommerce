import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { fakeAsync } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  user: [] = [];
  order:  any[] =[];
 
constructor(private ps:ProductsService, private toastr :ToastrService){}
ngOnInit(){
  this.getorders()
}
getorders(){
  this.ps.getorders().subscribe((get:any)=>{
    this.order = get
   
  })
}
delete(i:any){

  this.ps.deleteproductfromcorder(i).subscribe()
  this.toastr.success('product deleted', 'SUCCESS');
  console.log(i)
  this.ngOnInit()

}
}
