import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/Services/employee.service';
import { ManagerList } from 'src/app/Shared/Models/manager-list';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  EmployeeForm: FormGroup;
  ManagerList:ManagerList[];
  constructor(private router: Router, private formBuilder: FormBuilder,private route: ActivatedRoute, private employeeService :EmployeeService,private toastr: ToastrService) { 
    
  }

  ngOnInit(): void {
    this.EmployeeForm= this.formBuilder.group({
      EmployeeName:['',Validators.required],
      DesignationId:['',Validators.required],
      ManagerId:['',Validators.required],
      DateOfJoining:['',Validators.required],
      ContactNo:['',Validators.required],
      EmailId:['',Validators.required],
      DateOfBirth:['',Validators.required],
      Address:['',Validators.required]
    })
  }

  onChange(role:any):void
  {
    role=role-1;
    this.employeeService.getManagerList(role).subscribe(response =>{
      this.ManagerList=response;
    })
  }

   public onFormSubmit(form: NgForm):void
   {
   this.employeeService.addEmployee(form).subscribe(response=>{
      this.toastr.success("Added Succesfully",'Success');    
        this.router.navigate(['ems/Employee-list']);
     },(error:any)=>{
       console.log(error);
     })
   }


}
