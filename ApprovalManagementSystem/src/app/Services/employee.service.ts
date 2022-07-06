import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 
  baseUrl='https://localhost:44350/api/Employees';
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
  public getEmployeeName(id : number):Observable<any>{
    const url=`${this.baseUrl}/Employee/${id}`;
    return this.http.get<string>(url).pipe(catchError(this.handleError));
  }
 
}
