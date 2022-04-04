import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Book } from '../Models/book';
import { AdminService } from './admin.service';
import { AuthServiceService } from './auth-service.service';
import { Login } from '../Models/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl='http://localhost:3000/Books';
  baseUrl1='http://localhost:3000/UserCreds';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  BooksTaken:Book[];
  constructor(private http:HttpClient,private adminservice:AdminService,private authservice:AuthServiceService) { }
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
  public getBooksTaken():Book[]
  {
    
    this.adminservice.getAllBooks().subscribe(response=>
      {
        this.BooksTaken=response.filter(a =>this.authservice.userdetails.Books.includes(a.id))
        console.log(this.BooksTaken);
      },error=>{
        console.log(error);
      })
    return this.BooksTaken;

  }
  public ReadRequestEdit(Login:Login):Observable<Login>{
    console.log('In Service');
    console.log(Login);
    console.log(Login.id);
    const url=`${this.baseUrl1}/${Login.id}`;
    console.log(url);
    //return this.http.put(url,Login);
    return this.http.put<Login>(url,Login, { headers: this.headers }).pipe(catchError(this.handleError));
  }



}
