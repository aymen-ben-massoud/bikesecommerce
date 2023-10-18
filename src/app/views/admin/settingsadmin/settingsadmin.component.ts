import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Products } from 'src/app/interfaces/products';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-settingsadmin',
  templateUrl: './settingsadmin.component.html',
  styleUrls: ['./settingsadmin.component.css']
})
export class SettingsadminComponent {
  productlist  : Products[]=  []
   update: Products[]=[]
  shortLink: string = "/assets/images/";
  senddata  : any 
  selectedFile = File 
  @ViewChild('image') image?: ElementRef
  @ViewChild('f') form! :NgForm  
  @ViewChild('f2') f2! :NgForm
  @ViewChild('close3') close3!:ElementRef
  @ViewChild('close') close!:ElementRef
  @ViewChild('close2') close2!:ElementRef
  currentid:any
    constructor(private http :  HttpClient,
      private  PS : ProductsService ,
      private toastr: ToastrService
  
    ) { }
  
    ngOnInit(): void {
  this.PS.getAllProducts().subscribe((s:any)=>{
    this.productlist = s
  })
  
  

  
  
    }
  
    updateproducts(id:string){
this.currentid = id
let currentproduct = this.productlist.find((p:any) => {return p.id === id})
console.log(currentproduct)
this.form.setValue(
  {
name: currentproduct?.name,
category: currentproduct?.category,
amount: currentproduct?.amount,
price: currentproduct?.price,
img: currentproduct?.img
  }
)

 
}
  deletep(index  : any){
    this.PS.deletep(this.productlist[index].id).subscribe()
 
    this.close2.nativeElement.click()
    this.ngOnInit()
    this.toastr.success('product deleted', 'SUCCESS');
    
  }
  
 submitupdate(){
  this.PS.updateproduct(this.currentid,this.form.value).subscribe()
  this.form.reset()
  this.close.nativeElement.click()
  this.ngOnInit()
  this.toastr.success('product updeted', 'SUCCESS');

 }
 addproduct(f:any){
this.PS.addproduct(f).subscribe()
this.close3.nativeElement.click()
this.f2.reset()
this.ngOnInit()
this.toastr.success('product  added', 'SUCCESS');
 }
  
}
