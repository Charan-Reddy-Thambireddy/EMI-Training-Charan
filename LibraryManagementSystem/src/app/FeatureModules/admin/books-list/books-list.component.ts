import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/Models/book';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { AdminService } from 'src/app/Services/admin.service';
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  BooksList:Book[];
  displayedColumns=['id','Name','Genere','AuthorName','Description','Actions'];
  dataSource = new MatTableDataSource<Book>();

 @ViewChild(MatPaginator) paginator: MatPaginator;
 constructor(private Bookservice:AdminService, public dialog: MatDialog) { }

 ngOnInit(): void {
   this.Bookservice.getAllBooks().subscribe(response=>
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

}
