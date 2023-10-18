import { AuthService } from './../../../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  myForm :any
  admindata:any[]=[]

constructor(private formbuilder:FormBuilder, private route : Router, private auth: AuthService ){
  this.myForm = this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })
}


ngOnInit() {
  this.getadmin()
 
}

getadmin(){
  this.auth.getadmin().subscribe((res:any)=>{
this.admindata = res

  })
}
adminlogin(){
  let index = this.admindata.findIndex(item => item.email ==  this.myForm.value.email)
if(index !== -1){
  this.auth.loginadmin = true
  this.route.navigate(['settings'])
 
}


}

}
