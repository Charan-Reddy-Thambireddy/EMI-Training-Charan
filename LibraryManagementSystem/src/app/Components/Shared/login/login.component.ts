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
  public user :Login = new Login(0,'','',0,false);
  public isValidCreds:boolean=true;
  constructor(private authservice :AuthServiceService,private router: Router) { 

  }

  ngOnInit(): void {
  }

  public login(creds:any):void
  {    
    //const user=this.authservice.ValidateUser(creds.value);
    this.authservice.getUserdetails(creds.value).subscribe(data=>{  
      console.log(data);    
      this.user=data;
      console.log(this.user);
      this.validateUser(this.user);
    });
    
    
  }
  public validateUser(user:Login):void{
    if(user.valid==true)
    {
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
  }

}
