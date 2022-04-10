import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/Services/admin.service';
import { Book } from 'src/app/Models/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  Book = new Book();
  constructor(private adminService: AdminService, private route: Router, private router: ActivatedRoute, public dialog: MatDialog) { 
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
  public delete(id: number) {
    this.adminService.deleteBook(id).subscribe(response => {
      console.log(response);
      this.route.navigate(['books-list']);
    }, (error: any) => {
      console.log(error);
    })
  }
  public update(id: number) {
    this.route.navigate(['update-book',id]);
  }


}
