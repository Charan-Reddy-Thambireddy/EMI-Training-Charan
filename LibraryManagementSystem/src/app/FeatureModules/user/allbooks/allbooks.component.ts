import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/Models/book';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {

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
