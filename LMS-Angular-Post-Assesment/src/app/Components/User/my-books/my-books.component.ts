import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/Models/book';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { UserService } from 'src/app/Services/user.service';
import { AuthService } from 'src/app/Services/auth.service';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

   BooksList:Book[];
  displayedColumns=['id','Name','Genere','AuthorName','Description','Actions'];
  dataSource = new MatTableDataSource<Book>();

 @ViewChild(MatPaginator) paginator: MatPaginator;
 constructor(private userservice:UserService, public dialog: MatDialog,private authservice:AuthService,private adminservice:AdminService) { }

 ngOnInit(): void {
 // this.BooksList=this.userservice.BooksTaken;
 // console.log('back to comp');
  //console.log(this.BooksList);
  this.dataSource=new MatTableDataSource<Book>(this.userservice.getBooksTaken());
  this.dataSource.paginator=this.paginator;
    this.adminservice.getAllBooks().subscribe(response=>
      {
        var UserDetails=JSON.parse(localStorage.getItem('Userdetails')!);
        this.BooksList=response.filter(a =>UserDetails.Books.includes(a.id));
        this.dataSource=new MatTableDataSource<Book>(this.userservice.getBooksTaken());
        this.dataSource.paginator=this.paginator;
      },error=>{
        console.log(error);
      });
 }

}
