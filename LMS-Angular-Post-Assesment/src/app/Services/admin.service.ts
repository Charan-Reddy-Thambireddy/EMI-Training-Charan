import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Book } from '../Models/book';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl='http://localhost:3000/Books';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
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

  public getAllBooks():Observable<Book[]>{
  return this.http.get<Book[]>(this.baseUrl).pipe(catchError(this.handleError));
  }

  public addBook(Book:any):Observable<Book>{
    return this.http.post<Book>(this.baseUrl,Book);
  }

  public getBookById(id:number):Observable<Book>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.get<Book>(url).pipe(catchError(this.handleError));
  }

  public deleteBook(id:number):Observable<Book>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.delete<Book>(url).pipe(catchError(this.handleError));
  }
  public editBook(Book:any):Observable<Book>{
    console.log(Book);
    const url=`${this.baseUrl}/${Book.id}`;
    return this.http.put<Book>(url,Book, { headers: this.headers }).pipe(catchError(this.handleError));
  }
}
