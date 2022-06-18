import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApprovalManagementSystem';
  public isAuthenticated = false;
  public userName:string|null;
  public role:number;
  constructor(private router: Router,private toastr: ToastrService,private _snackBar: MatSnackBar) { 

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
    this.toastr.success('Logged out Successfully','Success');
    this.router.navigate(['login']);
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
