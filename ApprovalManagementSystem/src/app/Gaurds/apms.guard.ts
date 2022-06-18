import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { NavigationService } from '../Services/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class ApmsGuard implements CanActivate {
  constructor(private navigation:NavigationService,private toastr: ToastrService) { 

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isvalid:boolean = JSON.parse(localStorage.getItem('isLoggedIn')!);
      let role:number = JSON.parse(localStorage.getItem('role')!);
      if(isvalid)
      {
        if(role==1 || role==2 || role==3)
        {
          return true;
        }
      }
      this.toastr.error("Not Eligible to acess the page",'Failure');
      this.navigation.back();
    return true;
  }
  
}
