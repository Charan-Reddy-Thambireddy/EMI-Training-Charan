import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportsService } from 'src/app/Services/reports.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {
  ReportForm: FormGroup;
  dailogtoggle:number=0;
  
  constructor(private ReportService: ReportsService,private router: Router, private formBuilder: FormBuilder,private route: ActivatedRoute ) {
       
     }
  
    ngOnInit(): void {
      this.dailogtoggle=Number(this.route.snapshot.params['no']);
  
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
