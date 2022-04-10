import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationService } from '../Services/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private navigation:NavigationService,private router:Router) { 

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isvalid:boolean = JSON.parse(localStorage.getItem('isLoggedIn')!);
      let role:number = JSON.parse(localStorage.getItem('role')!);
      if(isvalid)
      {
        if(role==1)
        {
         this.router.navigate(['books-list']);
        }
        else if(role==2)
        {
          this.router.navigate(['all-books']);
        }
        return false;
      }
      else{
        return true;
      }
    
  }
  
}
