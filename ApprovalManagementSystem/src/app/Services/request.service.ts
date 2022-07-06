import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Requests } from '../Shared/Models/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseUrl='https://localhost:44350/api/Requests';
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

  public getSortedEmployeeRequests(raisedTo:string,status:number):Observable<Requests[]>{
    const url=`${this.baseUrl}/raisedTo/${raisedTo}/${status}`;
    return this.http.get<Requests[]>(url).pipe(catchError(this.handleError));
    }

    public getSortedUserRequests(raisedBy:string,status:number):Observable<Requests[]>{
      const url=`${this.baseUrl}/raisedBy/${raisedBy}/${status}`;
      return this.http.get<Requests[]>(url).pipe(catchError(this.handleError));
      }
  
  public getUserRequests(raisedBy:string):Observable<Requests[]>{
    const url=`${this.baseUrl}/raisedBy/${raisedBy}`;
    return this.http.get<Requests[]>(url).pipe(catchError(this.handleError));
    }

  public getEmployeeRequests(raisedTo:string):Observable<Requests[]>{
    const url=`${this.baseUrl}/raisedTo/${raisedTo}`;
    return this.http.get<Requests[]>(url).pipe(catchError(this.handleError));
  }

  
  public addRequest(request:any):Observable<Requests>{
    request.raisedTo=localStorage.getItem('managerId');
    request.status=1;
    request.accptedOrRejectedOn=null;
    request.comments='';
    request.raisedBy=localStorage.getItem('employeeId');
    request.createdBy=localStorage.getItem('employeeId');
    request.createdOn= new Date();
    request.escalatedOn=null;
    request.escalationRefReqId=0;
    request.raisedOn= new Date();
    request.spentAmount=0;
    request.updatedBy=null;
    request.updatedOn=null;

    return this.http.post<Requests>("https://localhost:44350/api/Requests",request);
  }
  public addDocument(model:any){
    const headers=new HttpHeaders();
    model.EmployeeId=localStorage.getItem('employeeId');
    headers.append('content-type','application/json');
    console.log(model);
    const httpoptions={headers};
    const formData:FormData=new FormData();
    formData.append('MyFile',model.MyFile);
    formData.append('RequestId',model.RequestId);
    formData.append('EmployeeId',model.EmployeeId);
    console.log(formData.get("file"));
   return this.http.post("https://localhost:44350/api/FileManager",formData,httpoptions);
  }

  public getRequestById(requestId:number):Observable<Requests>{
    const url=`${this.baseUrl}/${requestId}`;
    return this.http.get<Requests>(url).pipe(catchError(this.handleError));
  }

  public deleteRequest(requestId:number):Observable<Requests>{
    const url=`${this.baseUrl}/${requestId}`;
    return this.http.delete<Requests>(url).pipe(catchError(this.handleError));
  }
  public editRequest(request:any):Observable<Requests>{
    request.raisedTo=localStorage.getItem('managerId');
    request.status=1;
    request.accptedOrRejectedOn=null;
    request.comments='';
    request.raisedBy=localStorage.getItem('employeeId');
    request.createdBy=localStorage.getItem('employeeId');
    request.createdOn= new Date();
    request.escalatedOn=null;
    request.escalationRefReqId=0;
    request.raisedOn= new Date();
    request.spentAmount=0;
    request.updatedBy=localStorage.getItem('employeeId');
    request.updatedOn=new Date();
    console.log(request);
    const url=`${this.baseUrl}/${request.requestId}`;
    return this.http.put<Requests>(url,request, { headers: this.headers }).pipe(catchError(this.handleError));
  }

  public updateRequestStatus(requestId:number, status:number, comments:string):Observable<Requests>
  {
    const url=`${this.baseUrl}/${requestId}/${status}/${localStorage.getItem('employeeId')}/${comments}`;
    return this.http.put<Requests>(url,{ headers: this.headers }).pipe(catchError(this.handleError));
  }

}
