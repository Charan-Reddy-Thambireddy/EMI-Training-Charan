import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/Services/request.service';
import { Requests } from 'src/app/Shared/Models/request';
import { ToastrService } from 'ngx-toastr';
import { NavigationService } from 'src/app/Services/navigation.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})
export class EditRequestComponent implements OnInit {

  RequestForm: FormGroup;
  Request:Requests;
  constructor(public datepipe: DatePipe,private navigation:NavigationService,private router: Router, private formBuilder: FormBuilder,private route: ActivatedRoute, private requestservice :RequestService,private toastr: ToastrService) { 
    
  }

  ngOnInit(): void {
    var manager=localStorage.getItem('managerName');
    this.RequestForm= this.formBuilder.group({
      requestId:[],
      purpose:['',Validators.required],
      description:['',Validators.required],
      raisedTo:[manager],
        estimatedCost:['',Validators.required],
        advanceAmount:['',Validators.required],
        plannedDate:['',Validators.required]
    });
    this.getRequestDetailsById(this.route.snapshot.params['id']);
  }
  public getRequestDetailsById(requestId:number):void
  {
   this.requestservice.getRequestById(requestId).subscribe(data=>{
     this.Request=data
     console.log(data);
     console.log(this.Request);
     this.patchRequestDetails(data)
   });
  }
  
  public patchRequestDetails(Request:Requests):void
  {
    this.RequestForm.patchValue({
      requestId:Request.requestId,
      purpose:Request.purpose,
      description:Request.description,
      estimatedCost:Request.estimatedCost,
      advanceAmount:Request.advanceAmount,
      plannedDate:this.datepipe.transform((Request.plannedDate), 'yyyy-MM-dd')
    })

  }
    public onFormSubmit(form: Requests):void
    {
      this.requestservice.editRequest(form).subscribe(response=>{ 
        this.toastr.success("Updated Succesfully",'Success');         
        this.navigation.back();
      },(error:any)=>{
        console.log(error);
      })
    }


}
