import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ManagerList } from '../Shared/Models/manager-list';
import { Employee } from '../Shared/Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 
  baseUrl='https:/localhost:44350/api/Employees';
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
  public getAllEmployess():Observable<Employee[]>{
    var token=localStorage.getItem('token');
    const headers=new HttpHeaders().set("Authorization", "bearer " + token);;
    const httpoptions={headers};
    return this.http.get<Employee[]>(this.baseUrl,httpoptions).pipe(catchError(this.handleError));
    }
  public getEmployeeName(id : number):Observable<any>{
    const url=`${this.baseUrl}/Employee/${id}`;
    return this.http.get<string>(url).pipe(catchError(this.handleError));
  }

  public getManagerList(role : number):Observable<ManagerList[]>{
    const url=`${this.baseUrl}/managers/${role}`;
    return this.http.get<ManagerList[]>(url).pipe(catchError(this.handleError));
  }
  public addEmployee(employee:any):Observable<Employee>{
    employee.CreatedBy=Number(localStorage.getItem('employeeId'));
    employee.CreatedOn=new Date();
    var token=localStorage.getItem('token');
    console.log(employee);
    console.log(token);
    const headers=new HttpHeaders().set("Authorization", "bearer " + token);;
    const httpoptions={headers};
    return this.http.post<Employee>("https:/localhost:44350/api/Employees",employee,httpoptions);
  }
}
