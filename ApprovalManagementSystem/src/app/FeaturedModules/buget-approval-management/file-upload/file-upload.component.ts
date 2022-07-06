import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/Services/request.service';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Files } from 'src/app/Shared/Models/file';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  FileForm: FormGroup;
  file:File;
  constructor( private router: Router,private formBuilder: FormBuilder,private route: ActivatedRoute, private requestservice :RequestService,private toastr: ToastrService,
    public dialogRef: MatDialogRef<FileUploadComponent>,@Inject(MAT_DIALOG_DATA) public data: number) { }

  ngOnInit(): void {
    var employeeId=localStorage.getItem('employeeId');
    this.FileForm= this.formBuilder.group({
      MyFile:['',Validators.required],
      RequestId:[this.data,Validators.required]
    })
  }
  public uploading(event: any) {

    this.file = event.target.files[0];

  }
  public onFormSubmit(doc: Files):void
   {
    doc.MyFile= this.file;
    console.log(doc); 
    this.requestservice.addDocument(doc).subscribe(response=>{
      this.toastr.success("Added Succesfully",'Success');    
        this.router.navigate(['apms/Request-list']);
     },(error:any)=>{
       console.log(error);
     })
   }


}
