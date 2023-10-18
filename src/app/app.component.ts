import { BehaviorSubject } from 'rxjs';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { LocalstorageService } from './services/localstorage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bikes-e-commerce';

  isuser : boolean = false
  @ViewChild('bottomSection', { read: ElementRef }) bottomSection!: ElementRef;
  @ViewChild('toSection', { read: ElementRef }) toSection!: ElementRef;

  constructor(private renderer: Renderer2, private auth : AuthService, private route: Router, public local : LocalstorageService ) {}

  scrollToBottom() {
    const element = this.bottomSection.nativeElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'end' });

  }
  scrollTotop() {
    const element = this.toSection.nativeElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
  ngOnInit(){


    
  AOS.init();
 


  
  }
 admin(){
  if(this.auth.loginadmin  === true){
    this.isuser = true
   
  }
  if(this.auth.loginadmin === false ){
    this.isuser = false
   
  }

 }
 ngDoCheck(){
  this.admin()

 }
click : boolean = true

  toogle(){
    this.click = false
  }
  toogle2(){
    this.click = true
  }
logout(){
  this.route.navigate(['/'])
  this.auth.loginadmin = false 
  this.isuser = false

}

}


