import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/Services/request.service';
import { Requests } from 'src/app/Shared/Models/request';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.css']
})
export class RequestsListComponent implements OnInit {

  constructor(private requestservice:RequestService,private toastr: ToastrService,private route: Router,private _snackBar: MatSnackBar) { }

  requests:Requests[] =[];
  ngOnInit(): void {
    this.requestservice.getUserRequests(localStorage.getItem('employeeId')!).subscribe( response=>
      {
      this.requests=response;
      },error=>{
        console.log(error);
      })
    
  }
  public delete(requestId:number):void{
    this.requestservice.deleteRequest(requestId).subscribe(response=>{
      console.log(response);
      this.toastr.success("Deleted Succesfully",'Success'); 
      this.requestservice.getUserRequests(localStorage.getItem('employeeId')!).subscribe( response1=>
        {
        this.requests=response1;
        },error=>{
          console.log(error);
        })
      
    },(error:any)=>{
      console.log(error);
    });

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  public sort(status:number):void{
    if(status==0)
    {
      this.requestservice.getUserRequests(localStorage.getItem('employeeId')!).subscribe( response=>
        {
        this.requests=response;
        },error=>{
          console.log(error);
        });

    }
    else{
      this.requestservice.getSortedUserRequests(localStorage.getItem('employeeId')!,status).subscribe( response=>
        {
        this.requests=response;
        },error=>{
          console.log(error);
        })
    }
    
  }
}
