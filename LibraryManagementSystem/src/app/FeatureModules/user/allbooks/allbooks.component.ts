import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/Models/book';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { Login } from 'src/app/Models/login';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {

  BooksList:Book[];
  displayedColumns=['id','Name','Genere','AuthorName','Description','Actions'];
  dataSource = new MatTableDataSource<Book>();
  UserDetails:Login;

 @ViewChild(MatPaginator) paginator: MatPaginator;
 constructor(private adminservice:AdminService, public dialog: MatDialog, public authservice:AuthServiceService, public userservice:UserService) { }

 ngOnInit(): void {
   this.adminservice.getAllBooks().subscribe(response=>
     {
     this.BooksList=response;
     this.dataSource = new MatTableDataSource<Book>(response);
     console.log(this.dataSource);
     this.dataSource.paginator=this.paginator;
     console.log(this.dataSource);
     },error=>{
       console.log(error);
     })
 }

 public RequestToRead(id:number):void
 {
   console.log(id);
  this.UserDetails=this.authservice.userdetails;
  this.UserDetails.Books.push(id);
  console.log(this.UserDetails);
  this.userservice.ReadRequestEdit(this.UserDetails).subscribe(res=>{console.log(res)});
  alert('Request Accepted');
 }
}
