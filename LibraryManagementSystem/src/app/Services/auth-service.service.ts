import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Login } from '../Models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  baseUrl='http://localhost:3000/UserCreds';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  userdetails = new Login(0,'','',0,false);
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


  public getUserdetails(creds:any):Observable<Login>{
    const url=`${this.baseUrl}?userName=${creds.userName}&password=${creds.password}`;
    return this.http.get<Login>(url).pipe(catchError(this.handleError));
  }
}
