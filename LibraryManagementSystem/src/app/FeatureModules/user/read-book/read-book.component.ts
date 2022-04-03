import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/Services/admin.service';
import { Book } from 'src/app/Models/book';

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.css']
})
export class ReadBookComponent implements OnInit {

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

}
