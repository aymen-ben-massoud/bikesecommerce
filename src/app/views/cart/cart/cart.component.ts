import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { ProductsService } from 'src/app/services/products.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { Shooping } from 'src/app/interfaces/shooping';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  getproduct: any = [];
  cart: any[] = [];
  sendoreder  : any = []
  user: User[] = [];
  order: Shooping[] =[]
  public total  !:number
  public total2  !:number
  constructor(
  
 private productservice : ProductsService,
    private auth: AuthService,
    private local : LocalstorageService,
    private toastr: ToastrService,
    private  route:Router
  ) {}
  add = 0;
  ngOnInit(): void {
    
    this.total =  this.local.getcarTotalPrice()
this.getproducts()
this.total =  this.local.getcarTotalPrice()

  }

getproducts(){
  this.local.getCartObs().subscribe((data : any)=>this.cart = data)
  this.total =  this.local.getcarTotalPrice()
}
addproducts(){
  this.local.addProduct(this.getproduct);
}

  // delete(index: any) {
  //   return this.cs.deleteproductfromcart(this.cart[index].id);
  // }
  delete(product : any){
    this.local.removeProduct(product)
    this.getproducts()
    this.total =  this.local.getcarTotalPrice()
    this.toastr.error("Deleted", "Product")
  }
  clearcart(){
    return this.local.clearCart()

  }

  // save(index: any) {
  //   this.cs.save(this.cart[index].id, this.cart[index].amount);
  // }

  // getotal() {
  
  //  let   d = this.cart.reduce((acc, item) => {
  //       acc + item.price! * item.amount!;
  //     }, 0);
  //  d  = this.total2;
  //     console.log(this.total2)
  //   };
  

//   getotal(){
// this.local.getcarTotalPrice()

//   }
login(f : any){
   let x = f.value
  this.sendoreder.push(x)
 console.log(this.sendoreder)
}
  sendorders() {
    // let selectproducts = this.cart[this.add];
 

let setproduct = this.cart.map((item:any)=>{
  return {
    amount: item.amount,
    price: item.price,
    img : item.img,
   
  }

})
let sendoreders = this.sendoreder.map((item:any)=>{
  return {
    name : item.name,
    adress : item.adress,
    tel : item.tel
  }
})   
    let data = {
      // name: selectproducts.name,
      // img: selectproducts.img,
      // amount: selectproducts.amount,
      // price: selectproducts.price,
      // tel : selectproducts.tel,
      //   adress: selectproducts.adress
      setproduct,
      sendoreders,
  date :  new Date().toJSON().slice(0, 10)
    };
     this.productservice.pushorders(data ).subscribe(() => (this.add = 0));


    this.route.navigate(['/product'])
    this.toastr.success( 'your order has been sended  wait for call', 'success'  )
     this.local.clearCart()
  }
  mins(i : any){
this.cart[i].amount--
this.total =  this.local.getcarTotalPrice()
localStorage.setItem('cart' , JSON.stringify(this.cart));
  }
  plus(i : any){
    this.cart[i].amount++
    this.total =  this.local.getcarTotalPrice()
    localStorage.setItem('cart' , JSON.stringify(this.cart));
  }

clearall(){
  this.local.clearCart()
}
 

}
