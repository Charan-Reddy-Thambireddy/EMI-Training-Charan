import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/Services/admin.service';
import { Book } from 'src/app/Models/book';
import { UserService } from 'src/app/Services/user.service';
import { Login } from 'src/app/Models/login';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.css']
})
export class ReadBookComponent implements OnInit {

  Book = new Book();
  UserDetails:Login;
  constructor(private adminService: AdminService, private route: Router, private router: ActivatedRoute, public dialog: MatDialog,public userservice:UserService,private toastr: ToastrService) { 
  }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.getBookDetailsById(this.router.snapshot.params['id']);
  }

  public getBookDetailsById(id: number): void {
    this.adminService.getBookById(id).subscribe(data => {
      this.Book = data;
    });
  }

  public giveBackBook(id:number):void
  {
    this.UserDetails=JSON.parse(localStorage.getItem('Userdetails')!);
      this.UserDetails.Books=this.UserDetails.Books.filter(a =>a!=id)
      debugger;
      this.userservice.ReadRequestEdit(this.UserDetails).subscribe(res=>{
        this.toastr.success('Book Retured Successfully','Success');
        localStorage.setItem('Userdetails',JSON.stringify(res));
        this.route.navigate(['my-book']);
      });
  }
}
