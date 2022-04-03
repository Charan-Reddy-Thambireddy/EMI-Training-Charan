import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { Book } from 'src/app/Models/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  BookForm: FormGroup;
  Book:Book;
  
  constructor(private adminService: AdminService,private route: Router, private formBuilder: FormBuilder,private router:ActivatedRoute) {
       
     }
  
    ngOnInit(): void {
  
      this.BookForm=this.formBuilder.group({
        id:[],
        Name:['',Validators.required],
        Genere:['',Validators.required],
        AuthorName:['',Validators.required],
        Description:['',Validators.required],
        Content:['',Validators.required]
      });
      this.getBookDetailsById(this.router.snapshot.params['id']);
      
    }

  public getBookDetailsById(id:number):void
  {
   this.adminService.getBookById(id).subscribe(data=>{
     this.Book=data
     this.patchBookDetails(data)
   });
  }
  
  public patchBookDetails(Book:Book)
  {
    this.BookForm.patchValue({
      id:Book.id,
      Name:Book.Name,
      Genere:Book.Genere,
      AuthorName:Book.AuthorName,
      Description:Book.Description,
      Content:Book.Content
    })

  }
    public onFormSubmit(form: Book)
    {
      console.log(form);
      this.adminService.editBook(form).subscribe(response=>{      
        console.log(response);      
        this.route.navigate(['/Books-list'])
      },(error:any)=>{
        console.log(error);
      })
    }

}
