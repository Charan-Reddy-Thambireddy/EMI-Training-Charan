import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/Services/request.service';
import { Requests } from 'src/app/Shared/Models/request';
import { ToastrService } from 'ngx-toastr';
import { NavigationService } from 'src/app/Services/navigation.service';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})
export class EditRequestComponent implements OnInit {

  RequestForm: FormGroup;
  Request:Requests;
  constructor(private navigation:NavigationService,private router: Router, private formBuilder: FormBuilder,private route: ActivatedRoute, private requestservice :RequestService,private toastr: ToastrService) { 
    
  }

  ngOnInit(): void {
    var UserDetails=JSON.parse(localStorage.getItem('Userdetails')!);
    var manager=UserDetails.reportingTo;
    this.RequestForm= this.formBuilder.group({
      id:[],
      requestName:['',Validators.required],
      purpose:['',Validators.required],
      description:['',Validators.required],
      raisedTo:[manager],
        estimatedCost:['',Validators.required],
        advanceAmount:['',Validators.required],
        plannedDate:['',Validators.required]
    });
    this.getBookDetailsById(this.route.snapshot.params['id']);
  }
  public getBookDetailsById(id:number):void
  {
   this.requestservice.getRequestById(id).subscribe(data=>{
     this.Request=data
     this.patchBookDetails(data)
   });
  }
  
  public patchBookDetails(Request:Requests):void
  {
    this.RequestForm.patchValue({
      id:Request.id,
      requestName:Request.requestName,
      purpose:Request.purpose,
      description:Request.description,
      raisedTo:Request.raisedTo,
      estimatedCost:Request.estimatedCost,
      advanceAmount:Request.advanceAmount,
      plannedDate:Request.plannedDate
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
