import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  BookForm: FormGroup;
  
  constructor(private adminService: AdminService,private router: Router, private formBuilder: FormBuilder,private route: ActivatedRoute ) {
       
     }
  
    ngOnInit(): void {
  
      this.BookForm=this.formBuilder.group({
        Name:['',Validators.required],
        Genere:['',Validators.required],
        AuthorName:['',Validators.required],
        Description:['',Validators.required],
        Content:['',Validators.required]
      })
      
    }
  
    public onFormSubmit(form: NgForm)
    {
      console.log(form);
     
     this.adminService.addBook(form).subscribe(response=>{
       
      console.log(response);
        const id=response['id'];
        
        this.router.navigate(['../details',id])
      },(error:any)=>{
        console.log(error);
      })
    }


}
