import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/Models/book';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
import { AdminService } from 'src/app/Services/admin.service';
import { Login } from 'src/app/Models/login';
import { UserService } from 'src/app/Services/user.service';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  
  BooksList:Book[];
  filteredBookList:Book[];
  displayedColumns=['id','Name','Genere','AuthorName','Description','Actions'];
  dataSource = new MatTableDataSource<Book>();
  UserDetails:Login;
  private _filteredBy:string = '';

  get filteredBy():string
  {
      return this._filteredBy;
  }
  set filteredBy(value:string){
      this._filteredBy=value;
      this.filteredBookList=this.performFilter(value);
      this.dataSource = new MatTableDataSource<Book>(this.filteredBookList);
      this.dataSource.paginator=this.paginator;
  }

 @ViewChild(MatPaginator) paginator: MatPaginator;
 constructor(private adminservice:AdminService, public dialog: MatDialog, public authservice:AuthService, public userservice:UserService) { }

 ngOnInit(): void {
   this.adminservice.getAllBooks().subscribe(response=>
     {
      this.filteredBookList=response;
     this.BooksList=response;
     this.dataSource = new MatTableDataSource<Book>(this.filteredBookList);
     console.log(this.dataSource);
     this.dataSource.paginator=this.paginator;
     console.log(this.dataSource);
     },error=>{
       console.log(error);
     })
 }

 public RequestToRead(id:number):void
 {
  this.UserDetails=JSON.parse(localStorage.getItem('Userdetails')!);
  debugger;
  if(this.UserDetails.Books.includes(id))
  {
    alert('Already Available to read, Check in "My Books"');
  }
  else if(this.UserDetails.Books.length>=3)
  {
    alert('U already taken three books. Not allowed to take more than that. Return one of them to Take this book.');
  }
  else{
    this.UserDetails.Books.push(id);
    this.userservice.ReadRequestEdit(this.UserDetails).subscribe(res=>{
      localStorage.setItem('Userdetails',JSON.stringify(res));
    });
    alert('Request Accepted, Book is now available for redaing in "My Books"');
  }
  
 }
 performFilter(filteringby:string):Book[]
    {
        filteringby=filteringby.toLowerCase();
        return this.BooksList.filter((book:Book) => book.Name.toLowerCase().includes(filteringby) || book.AuthorName.toLowerCase().includes(filteringby) || book.Genere.toLowerCase().includes(filteringby));
    }

}
