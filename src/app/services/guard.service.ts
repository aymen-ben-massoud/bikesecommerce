import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private auth : AuthService, private router : Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Observable<boolean> | Promise<boolean> {

return new Promise (resolve => {

if(this.auth.loginadmin) resolve (true);
else this.router.navigate([''])
})}

  }
  


