import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Book } from '../Models/book';
import { Login } from '../Models/login';
import { AdminService } from './admin.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl='http://localhost:3000/Books';
  baseUrl1='http://localhost:3000/UserCreds';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  BooksTaken:Book[];
  constructor(private http:HttpClient,private adminservice:AdminService,private authservice:AuthService) { }
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
        var UserDetails=JSON.parse(localStorage.getItem('Userdetails')!);
        this.BooksTaken=response.filter(a =>UserDetails.Books.includes(a.id))
        console.log(this.BooksTaken);
      },error=>{
        console.log(error);
      })
    return this.BooksTaken;

  }
  public ReadRequestEdit(Login:Login):Observable<Login>{
    const url=`${this.baseUrl1}/${Login.id}`;
    return this.http.put<Login>(url,Login, { headers: this.headers }).pipe(catchError(this.handleError));
  }

  public getUserbookdetails(userName:any,password:any):Observable<any>{
    const url=`${this.baseUrl}?userName=${userName}&password=${password}`;
    return this.http.get<Login>(url).pipe(catchError(this.handleError));
  }


}
