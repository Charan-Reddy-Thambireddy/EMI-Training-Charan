import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { BooksTakenComponent } from './books-taken/books-taken.component';
import { ReadBookComponent } from './read-book/read-book.component';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserNavComponent } from './user-nav/user-nav.component';


@NgModule({
  declarations: [
    BooksTakenComponent,
    ReadBookComponent,
    AllbooksComponent,
    UserNavComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
