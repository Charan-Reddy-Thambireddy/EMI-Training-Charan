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
  ngOnInit(): void {
    this.requestservice.getEmployeeRequests(localStorage.getItem('userName')!).subscribe( response=>
      {
      this.requests=response;
      },error=>{
        console.log(error);
      });
    
  }
  public update(request:Requests, status:number):void{
    request.status=status;
    this.requestservice.updateRequestStatus(request).subscribe(response=>{
      if(status==2)
      {
        this.toastr.success("Approved Succesfully",'Success'); 
      }
      else{
        this.toastr.success("Rejected Succesfully",'Success');
      }
       
      this.requestservice.getEmployeeRequests(localStorage.getItem('userName')!).subscribe( response=>
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
      this.requestservice.getEmployeeRequests(localStorage.getItem('userName')!).subscribe( response=>
        {
        this.requests=response;
        },error=>{
          console.log(error);
        });

    }
    else{
      this.requestservice.getSortedEmployeeRequests(localStorage.getItem('userName')!,status).subscribe( response=>
        {
        this.requests=response;
        },error=>{
          console.log(error);
        })
    }
    
  }
}
