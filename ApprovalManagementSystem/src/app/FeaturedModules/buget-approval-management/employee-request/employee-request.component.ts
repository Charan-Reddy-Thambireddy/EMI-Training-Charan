import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/Services/request.service';
import { Requests } from 'src/app/Shared/Models/request';
import { CommentDailogComponent } from '../comment-dailog/comment-dailog.component';

@Component({
  selector: 'app-employee-request',
  templateUrl: './employee-request.component.html',
  styleUrls: ['./employee-request.component.css']
})
export class EmployeeRequestComponent implements OnInit {

  constructor(private requestservice:RequestService,private _snackBar: MatSnackBar,private toastr: ToastrService,public dialog: MatDialog) { }

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
    var comments="Checked";
    this.requestservice.updateRequestStatus(request.requestId,status,comments).subscribe(response=>{
      if(status==2)
      {
        this.toastr.success("Approved Succesfully",'Success'); 
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
  openDialog(requestId:number) {
    const dialogRef = this.dialog.open(CommentDailogComponent,{data: requestId});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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
