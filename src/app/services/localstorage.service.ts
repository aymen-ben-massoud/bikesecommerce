import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }




  private readonly cart$ = new BehaviorSubject<any[]>(this.getProduct());
  
  addProduct(product:any ){
   this.cart$.next([...(this.cart$.value || []),product]);
   localStorage.setItem('cart' , JSON.stringify(this.cart$.value));
  }

   getProduct(){
    return JSON.parse(localStorage.getItem('cart')!)
  }
  
getcarTotalPrice(){
  return this.cart$.value.reduce((acc, item)=> acc + item.price * item.amount, 0);

}
getcart(){
  return this.cart$.getValue();
}

clearCart(){
  this.cart$.next([]);
  localStorage.removeItem('cart');

}
removeProduct(product : any){
 
  const cart = this.cart$?.value.filter((item)=> item.id !== product.id);
  this.cart$.next(cart);
  localStorage.setItem('cart' , JSON.stringify(cart))

}



get cartCount(){
  return this.cart$?.value?.length;
  }

getCartObs = () => this.cart$.asObservable();


}
