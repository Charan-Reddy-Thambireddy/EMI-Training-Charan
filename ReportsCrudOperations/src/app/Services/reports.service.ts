import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Report } from '../Models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  baseUrl='http://localhost:3000/Reports';
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

  public getAllReports():Observable<Report[]>{
  return this.http.get<Report[]>(this.baseUrl).pipe(catchError(this.handleError));
  }

  public addReport(report:any):Observable<Report>{
    return this.http.post<Report>(this.baseUrl,report);
  }

  public getReportById(id:number):Observable<Report>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.get<Report>(url).pipe(catchError(this.handleError));
  }

  public deleteReport(id:number):Observable<Report>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.delete<Report>(url).pipe(catchError(this.handleError));
  }
  public editReport(report:any):Observable<Report>{
    const url=`${this.baseUrl}/${report.id}`;
    return this.http.put<Report>(url,report, { headers: this.headers }).pipe(catchError(this.handleError));
  }
}
