import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/Services/admin.service';
import { Book } from 'src/app/Models/book';
@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.css']
})
export class BooksDetailsComponent implements OnInit {

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
      this.route.navigate(['./list']);
    }, (error: any) => {
      console.log(error);
    })
  }
  public update(id: number) {
    this.route.navigate(['edit',id]);
  }

}
