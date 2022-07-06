import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/Services/request.service';
import { Requests } from 'src/app/Shared/Models/request';

@Component({
  selector: 'app-employee-request',
  templateUrl: './employee-request.component.html',
  styleUrls: ['./employee-request.component.css']
})
export class EmployeeRequestComponent implements OnInit {

  constructor(private requestservice:RequestService,private _snackBar: MatSnackBar,private toastr: ToastrService,) { }

  requests:Requests[] =[];
  role=localStorage.getItem('role');
  ngOnInit(): void {
    this.requestservice.getEmployeeRequests(localStorage.getItem('employeeId')!).subscribe( response=>
      {
      this.requests=response;
      },error=>{
        console.log(error);
      });
    
  }
  public update(request:Requests, status:number):void{
    this.requestservice.updateRequestStatus(request.requestId,status).subscribe(response=>{
      if(status==2)
      {
        this.toastr.success("Approved Succesfully",'Success'); 
      }
      else if(status==3){
        this.toastr.success("Rejected Succesfully",'Success');
      }
      else if(status==4){
        this.toastr.success("Forwarded Succesfully",'Success');
      }
       
      this.requestservice.getEmployeeRequests(localStorage.getItem('employeeId')!).subscribe( response=>
        {
        this.requests=response;
        },error=>{
          console.log(error);
        })
    },(error)=>{
      console.log(error);
    });
  }
  
  openSnackBar(message: string, action: string):void {
    this._snackBar.open(message, action);
  }

  public sort(status:number):void{
    if(status==0)
    {
      this.requestservice.getEmployeeRequests(localStorage.getItem('employeeId')!).subscribe( response=>
        {
        this.requests=response;
        },error=>{
          console.log(error);
        });

    }
    else{
      this.requestservice.getSortedEmployeeRequests(localStorage.getItem('employeeId')!,status).subscribe( response=>
        {
        this.requests=response;
        },error=>{
          console.log(error);
        })
    }
    
  }
}
