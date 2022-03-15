import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Report } from '../Models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  baseUrl='http://localhost:3000/Reports';
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

  public getAllReports():Observable<Report[]>{
  return this.http.get<Report[]>(this.baseUrl).pipe(catchError(this.handleError));
  }
}
