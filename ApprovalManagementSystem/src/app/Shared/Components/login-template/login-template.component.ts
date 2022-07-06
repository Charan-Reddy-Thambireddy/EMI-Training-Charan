import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetApprovalEmiComponent } from 'budget-approval-emi';
import { LoginService } from 'src/app/Services/login.service';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/Services/employee.service';


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
  constructor(private loginservice: LoginService, private employeeService: EmployeeService, private router: Router, private toastr :ToastrService) { }
  ngOnInit(): void {
  }
  public login(creds: any): void {
    this.loginservice.getUserdetails(creds.value).subscribe(data => {
      if(data.user)
      {
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.user.designationId);
        localStorage.setItem('employeeId', data.user.employeeId);
        localStorage.setItem('managerId', data.user.managerId);
        localStorage.setItem('employeeName', data.user.employeeName);
        localStorage.setItem('userName', data.user.userName);
        localStorage.setItem('emailId', data.user.emailId);
        localStorage.setItem('managerName', data.user.managerName);

        this.isValidCreds = true;
        this.toastr.success('logged in succesfully as ' + localStorage.getItem('userName'), 'Success');
        this.router.navigate(['home']);  
      }
    else{
      this.isValidCreds = false;
      this.toastr.error("Can't login with these credentials!",'Failure');
    }
    });
  }
 
}
