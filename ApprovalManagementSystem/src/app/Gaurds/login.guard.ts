import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router:Router) { 

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isvalid:boolean = JSON.parse(localStorage.getItem('isLoggedIn')!);
      let role:number = JSON.parse(localStorage.getItem('role')!);
      if(isvalid)
      {
        if(role==5)
        {
         this.router.navigate(['ems']);
        }
        else if(role==1 || role==2 || role==3)
        {
          this.router.navigate(['apms']);
        }
        return false;
      }
      else{
        return true;
      }
  }
  
}
