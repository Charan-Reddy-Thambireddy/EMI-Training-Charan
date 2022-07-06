import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Login } from '../Shared/Models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl='https://localhost:44350/api/Users';
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
    const url=`${this.baseUrl}/${creds.userName}/${creds.password}`;
    //const url=" https://localhost:44350/api/Users/Charan/1234";
    return this.http.get<Login>(url).pipe(catchError(this.handleError));
  }

}
