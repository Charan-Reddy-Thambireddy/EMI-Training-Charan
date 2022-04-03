import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './Models/login';
import { AuthServiceService } from './Services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'Library Management System';
  public isAuthenticated = false;
  public userName:string;
  constructor(private authservice:AuthServiceService,private router:Router)
  { 
  }
  ngDoCheck(): void {
    if(this.authservice.userdetails.valid)
    {
     this.isAuthenticated=true;
     this.userName=this.authservice.userdetails.userName;
     console.log(this.userName);
    }
  }
 
  public logout(): void {
    this.authservice.logout();
    this.isAuthenticated=false;
    this.router.navigate(['login']);
  }
}
