import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxValidator, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/Services/request.service';

@Component({
  selector: 'app-budget-request',
  templateUrl: './budget-request.component.html',
  styleUrls: ['./budget-request.component.css']
})
export class BudgetRequestComponent implements OnInit {

  RequestForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder,private route: ActivatedRoute, private requestservice :RequestService,private toastr: ToastrService) { 
    
  }

  ngOnInit(): void {
    var UserDetails=JSON.parse(localStorage.getItem('Userdetails')!);
    var manager=UserDetails.reportingTo;
    this.RequestForm= this.formBuilder.group({
      requestName:['',Validators.required],
      purpose:['',Validators.required],
      description:['',Validators.required],
      raisedTo:[manager],
        estimatedCost:['',Validators.required],
        advanceAmount:['',Validators.required],
        plannedDate:['',Validators.required]
    })
  }
   public onFormSubmit(form: NgForm):void
   {
    console.log(form);
     
    this.requestservice.addRequest(form).subscribe(response=>{
      response.requestId='Req'+response.id
      this.requestservice.editRequest(response).subscribe(response=>{
        console.log(response);
        this.toastr.success("Added Succesfully",'Success');    
        this.router.navigate(['apms/Request-list']);
      },(error:any)=>{
        console.log(error);
      })
      
     
     },(error:any)=>{
       console.log(error);
     })
   }


}
