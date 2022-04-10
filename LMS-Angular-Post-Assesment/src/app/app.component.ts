import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck{
  title = 'Library Management System';
  public isAuthenticated = false;
  public userName:string|null;
  public role:number;
  constructor(private router: Router) { 

  }

  ngOnInit(): void {
    this.isAuthenticated=JSON.parse(localStorage.getItem('isLoggedIn')!);
    console.log(localStorage.getItem('userName'));
    this.userName=localStorage.getItem('userName');
    this.role=JSON.parse(localStorage.getItem('role')!);
  }

  ngDoCheck(): void {
    this.isAuthenticated=JSON.parse(localStorage.getItem('isLoggedIn')!);
    console.log(localStorage.getItem('userName'))
    this.userName=localStorage.getItem('userName');
    this.role=JSON.parse(localStorage.getItem('role')!);
  }
  

  public logout(): void {
    localStorage.clear();
    this.isAuthenticated=false;
    this.userName='';
    this.role=0;
    alert('logged Out succesfully');
    this.router.navigate(['login']);
  }

}
