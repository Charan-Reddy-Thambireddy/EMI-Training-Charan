import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetApprovalEmiComponent } from 'budget-approval-emi';
import { LoginService } from 'src/app/Services/login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.css']
})
export class LoginTemplateComponent implements OnInit {
  public userName: string = '';
  public password: string = '';
  //public user :Login = new Login();
  public isValidCreds: boolean = true;
  constructor(private loginservice: LoginService, private router: Router, private toastr :ToastrService) { }
  ngOnInit(): void {
  }
  public login(creds: any): void {
    this.loginservice.getUserdetails(creds.value).subscribe(data => {
      if(data.length>0)
      {
      data.forEach((a: any) => {
        localStorage.setItem('isLoggedIn', a.valid);
        localStorage.setItem('role', a.role);
        localStorage.setItem('userName', a.userName);
        localStorage.setItem('Userdetails',JSON.stringify(a));
        debugger;
        console.log(localStorage.getItem('isLoggedIn'))
        if (a.valid == true) {
          this.isValidCreds = true;
          this.toastr.success('logged in succesfully as ' + localStorage.getItem('userName'), 'Success');
          this.router.navigate(['home']);
        }
        else {
          this.isValidCreds = false;
          this.toastr.error("Can't login with these credentials!",'Failure');
        }    
      });
    }
    else{
      this.isValidCreds = false;
      this.toastr.error("Can't login with these credentials!",'Failure');
    }
    });
  }
 
}
