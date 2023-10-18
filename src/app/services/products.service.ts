import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseApiUrl= 'http://localhost:3000/products/'
  constructor(private http :  HttpClient ) { }



  getAllProducts(){

    return this.http.get<any[]>('http://localhost:3000/products')
  }

getmensproducts(){
return this.http.get('http://localhost:3000/products?category=mens')
}
getkidsproducts(){
  return this.http.get('http://localhost:3000/products?category=kids')
  }
  getproductbyid(id:any){
    return this.http.get<any[]>('http://localhost:3000/products/'+id)
  }
  pushorders(data:any){
  return this.http.post('http://localhost:3000/order' ,data)
  }
 getorders(){
return this.http.get('http://localhost:3000/order')
 }

 
  updateproduct(id:any, data:any){
    return this.http.put(`http://localhost:3000/products/${id}`,data)
  }
  deletep(id :any){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }

 addproduct(data: any ){

   return this.http.post("http://localhost:3000/products/",data   )
 
      }

      deleteproductfromcorder(id:any){
return this.http.delete(`http://localhost:3000/order/${id}`)

      }



}