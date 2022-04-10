import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Login } from '../Models/login';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl='http://localhost:3000/UserCreds';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  userdetails = new Login();
  constructor(private http:HttpClient) { }
  private handleError(errorResponse:HttpErrorResponse)
  {
    if(errorResponse.error instanceof ErrorEvent)
    {
      console.log('Client Side Error',errorResponse.error);
    }
    else
    {
      console.log('Server Side error',errorResponse.error);
    }
 
    return throwError('their is error in code');
  }


  public getUserdetails(creds:any):Observable<any>{
    const url=`${this.baseUrl}?userName=${creds.userName}&password=${creds.password}`;
    return this.http.get<Login>(url).pipe(catchError(this.handleError));
  }

  public validateDetails(creds:any):void{
    this.getUserdetails(creds.value).subscribe(data=>{  
      console.log(data);
      data.forEach((a:any) => {
        console.log(a);
        this.userdetails=a;
        localStorage.setItem('isLoggedIn',a.valid);
        localStorage.setItem('role',a.role);
        localStorage.setItem('userName',a.userName);
        localStorage.setItem('Books',JSON.stringify(a.Books));
        localStorage.setItem('Userdetails',JSON.stringify(a));
          });     
    });
  }
}
