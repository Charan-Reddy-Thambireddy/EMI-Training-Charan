import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NavigationService } from 'src/app/Services/navigation.service';
import { RequestService } from 'src/app/Services/request.service';
import { Requests } from 'src/app/Shared/Models/request';
import { DatePipe } from '@angular/common';
import { CommentDailogComponent } from '../comment-dailog/comment-dailog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {

  RequestForm: FormGroup;
  Request:Requests;
  role=localStorage.getItem('role');
  employeeId =Number(localStorage.getItem('employeeId')!);
  constructor(public datepipe: DatePipe,private navigation:NavigationService,private router: Router, private formBuilder: FormBuilder,private route: ActivatedRoute, private requestservice :RequestService,private toastr: ToastrService,public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
    this.RequestForm= this.formBuilder.group({
      requestId:[],
      purpose:['',Validators.required],
      description:['',Validators.required],
      raisedTo:[],
      raisedBy:[],
        estimatedCost:['',Validators.required],
        advanceAmount:['',Validators.required],
        plannedDate:['',Validators.required],
        spentAmount:[],
        status:[]
    });
    this.getRequestDetailsById(this.route.snapshot.params['id']);
  }
  public getRequestDetailsById(requestId:number):void
  {
   this.requestservice.getRequestById(requestId).subscribe(data=>{
     this.Request=data
     this.patchRequestDetails(data)
   });
  }
  
  public patchRequestDetails(Request:Requests):void
  {
    this.RequestForm.patchValue({
      requestId:Request.requestId,
      purpose:Request.purpose,
      raisedTo:Request.raisedToName,
      raisedBy:Request.raisedByName,
      description:Request.description,
      estimatedCost:Request.estimatedCost,
      advanceAmount:Request.advanceAmount,
      plannedDate:this.datepipe.transform((Request.plannedDate), 'yyyy-MM-dd'),
      status:Request.status==1?'Initatied':Request.status==2?'Accepted':Request.status==3?'Rejected':Request.status==4?'Forwaded':Request.status==5?'Escalated':'Un Know',
      spentAmount:Request.spentAmount
    })

  }

  public Back():void
  {
     this.navigation.back();
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
      this.router.navigate(['apms/EmployeeRequests']);
    },(error)=>{
      console.log(error);
    });
  }
  
  openDialog(requestId:number) {
    const dialogRef = this.dialog.open(CommentDailogComponent,{data: requestId});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
