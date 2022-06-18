import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Requests } from '../Shared/Models/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseUrl='http://localhost:3000/Requests';
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

  public getAllRequests():Observable<Requests[]>{
  return this.http.get<Requests[]>(this.baseUrl).pipe(catchError(this.handleError));
  }

  public getSortedEmployeeRequests(raisedBy:string,status:number):Observable<Requests[]>{
    const url=`${this.baseUrl}?raisedTo=${raisedBy}&status=${status}`;
    return this.http.get<Requests[]>(url).pipe(catchError(this.handleError));
    }

    public getSortedUserRequests(raisedBy:string,status:number):Observable<Requests[]>{
      const url=`${this.baseUrl}?raisedBy=${raisedBy}&status=${status}`;
      return this.http.get<Requests[]>(url).pipe(catchError(this.handleError));
      }
  
  public getUserRequests(raisedBy:string):Observable<Requests[]>{
    const url=`${this.baseUrl}?raisedBy=${raisedBy}`;
    return this.http.get<Requests[]>(url).pipe(catchError(this.handleError));
    }

  public getEmployeeRequests(raisedTo:string):Observable<Requests[]>{
    const url=`${this.baseUrl}?raisedTo=${raisedTo}`;
    return this.http.get<Requests[]>(url).pipe(catchError(this.handleError));
  }

  public addRequest(request:any):Observable<Requests>{
    request.status=1;
    request.accptedOrRejectedOn=null;
    request.comments='';
    request.raisedBy=localStorage.getItem('userName');
    request.createdBy=localStorage.getItem('userName');
    request.createdOn= new Date();
    request.escalatedOn=null;
    request.escalationRefReqId=0;
    request.raisedOn= new Date();
    request.requestId= '';
    request.spentAmount=0;
    request.updatedBy='';
    request.updatedOn=null;
    return this.http.post<Requests>(this.baseUrl,request);
  }

  public getRequestById(id:number):Observable<Requests>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.get<Requests>(url).pipe(catchError(this.handleError));
  }

  public deleteRequest(id:number):Observable<Requests>{
    const url=`${this.baseUrl}/${id}`;
    return this.http.delete<Requests>(url).pipe(catchError(this.handleError));
  }
  public editRequest(request:any):Observable<Requests>{
    request.status=1;
    request.accptedOrRejectedOn=null;
    request.comments='';
    request.raisedBy=localStorage.getItem('userName');
    request.createdBy=localStorage.getItem('userName');
    request.createdOn= new Date();
    request.escalatedOn=null;
    request.escalationRefReqId=0;
    request.raisedOn= new Date();
    request.requestId= 'Req'+request.id;
    request.spentAmount=0;
    request.updatedBy=localStorage.getItem('userName');
    request.updatedOn=new Date();
    console.log(request);
    const url=`${this.baseUrl}/${request.id}`;
    return this.http.put<Requests>(url,request, { headers: this.headers }).pipe(catchError(this.handleError));
  }

  public updateRequestStatus(request:Requests):Observable<Requests>
  {
    const url=`${this.baseUrl}/${request.id}`;
    return this.http.put<Requests>(url,request, { headers: this.headers }).pipe(catchError(this.handleError));
  }

}
