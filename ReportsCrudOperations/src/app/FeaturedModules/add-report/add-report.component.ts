import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {
  ReportForm: FormGroup;
  
  constructor(private ReportService: ReportsService,private router: Router, private formBuilder: FormBuilder) {
       
     }
  
    ngOnInit(): void {
  
      this.ReportForm=this.formBuilder.group({
     
        from:['',Validators.required],
        to:['',Validators.required],
        dateCreated:['',Validators.required],
        permanentLink:['',Validators.required]
      })
      
    }
  
    public onFormSubmit(form: NgForm)
    {
      console.log(form);
     
     this.ReportService.addReport(form).subscribe(response=>{
       
      console.log(response);
        const id=response['id'];
        
        this.router.navigate(['details',id])
      },(error:any)=>{
        console.log(error);
      })
    }

}
