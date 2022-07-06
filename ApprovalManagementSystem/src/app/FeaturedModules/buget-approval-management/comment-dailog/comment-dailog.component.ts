import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/Services/request.service';

@Component({
  selector: 'app-comment-dailog',
  templateUrl: './comment-dailog.component.html',
  styleUrls: ['./comment-dailog.component.css']
})
export class CommentDailogComponent implements OnInit {
  requestForm: FormGroup;
  constructor( private router: Router,private formBuilder: FormBuilder,private route: ActivatedRoute, private requestservice :RequestService,private toastr: ToastrService,
    public dialogRef: MatDialogRef<CommentDailogComponent>,@Inject(MAT_DIALOG_DATA) public data: number) { }
    
  ngOnInit(): void {
    var employeeId=localStorage.getItem('employeeId');
    this.requestForm= this.formBuilder.group({
      Comment:['',Validators.required]
    })
  }
  public onFormSubmit(details: any):void
   { 
    this.requestservice.updateRequestStatus(this.data,3,details.Comment).subscribe(response=>{
        this.toastr.success("Rejected Succesfully",'Success');
        window.location.reload();
    },(error)=>{
      console.log(error);
    });
   }


}
