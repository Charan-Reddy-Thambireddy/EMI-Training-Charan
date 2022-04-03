import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/login';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userName:string='';
  public password:string='';
  public user :Login = new Login();
  public isValidCreds:boolean=true;
  constructor(private authservice :AuthServiceService,private router: Router) { 

  }

  ngOnInit(): void {
  }

  public login(creds:any):void
  {   
    this.user =this.authservice.validateDetails(creds);
    if(this.user.valid==true)
    {
      console.log(this.user.userName);
      this.isValidCreds=true;
      if(this.user.role==1)
      {
        alert('logged in succesfully as Admin');
        this.router.navigate(['admin']);
      }
      else{
        alert('logged in succesfully as'+this.user.userName);
        this.router.navigate(['user']);
      }
    }
    else{
      this.isValidCreds=false;
    }

   /* this.authservice.getUserdetails(creds.value).subscribe(data=>{  
      console.log(data);    
      this.user=data;
      data.forEach((a:any) => {
        this.validateUser(a);
          });
      
    });*/
    
    
  }
 /* public validateUser(user:Login):void{
    if(user.valid==true)
    {
      console.log(user.userName);
      this.isValidCreds=true;
      if(user.role==1)
      {
        this.router.navigate(['home']);
      }
      else{
        this.router.navigate(['home']);
      }
    }
    else{
      this.isValidCreds=false;
    }
  }*/

}
