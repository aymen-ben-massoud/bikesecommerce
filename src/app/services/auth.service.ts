import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
loginadmin: boolean = false  

  constructor(private http :  HttpClient) { }
 

  getadmin(){
    return this.http.get('http://localhost:3000/admin')
  }
 
} 
