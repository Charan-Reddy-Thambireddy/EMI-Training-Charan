import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { BooksTakenComponent } from './books-taken/books-taken.component';
import { ReadBookComponent } from './read-book/read-book.component';


@NgModule({
  declarations: [
    BooksTakenComponent,
    ReadBookComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
