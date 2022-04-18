import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName: string = '';
  public password: string = '';
  //public user :Login = new Login();
  public isValidCreds: boolean = true;
  constructor(private authservice: AuthService, private router: Router,private toastr: ToastrService) {

  }

  ngOnInit(): void {
  }

  public login(creds: any): void {
    this.authservice.getUserdetails(creds.value).subscribe(data => {
      if(data.length>0)
      {
      data.forEach((a: any) => {
        localStorage.setItem('isLoggedIn', a.valid);
        localStorage.setItem('role', a.role);
        localStorage.setItem('userName', a.userName);
        localStorage.setItem('Books', a.Books);
        localStorage.setItem('Userdetails',JSON.stringify(a));
        debugger;
        console.log(localStorage.getItem('isLoggedIn'))
        if (a.valid == true) {
          console.log(a.userName);
          this.isValidCreds = true;
          if (a.role == 1) {
            this.toastr.success('logged in succesfully as Admin', 'Success');
            //alert('logged in succesfully as Admin');
            this.router.navigate(['books-list']);
          }
          else {
            this.toastr.success('logged in succesfully as ' + localStorage.getItem('userName'), 'Success');
            //alert('logged in succesfully as ' + localStorage.getItem('userName'));
            this.router.navigate(['my-books']);
          }
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

    /* this.authservice.validateDetails(creds);
     console.log(localStorage.getItem('isLoggedIn'))
     if(localStorage.getItem('isLoggedIn')=='true')
     {
       console.log(localStorage.getItem('userName'));
       this.isValidCreds=true;
       if(localStorage.getItem('role')=='1')
       {
         alert('logged in succesfully as Admin');
         this.router.navigate(['books-list']);
       }
       else{
         alert('logged in succesfully as '+localStorage.getItem('userName'));
         this.router.navigate(['my-books']);
       }
     }
     else{
       this.isValidCreds=false;
     }*/

  }

}
