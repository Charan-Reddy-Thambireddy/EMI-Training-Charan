import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationService } from '../Services/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private navigation:NavigationService) { 

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isvalid:boolean = JSON.parse(localStorage.getItem('isLoggedIn')!);
      let role:number = JSON.parse(localStorage.getItem('role')!);
      if(isvalid)
      {
        if(role==2)
        {
          return true;
        }
      }
      alert('Not Eligible to acess the page');
      this.navigation.back();
    return true;
  }
  
}
