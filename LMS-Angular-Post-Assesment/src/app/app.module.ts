import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './Components/Admin/add-book/add-book.component';
import { EditBookComponent } from './Components/Admin/edit-book/edit-book.component';
import { BookDetailsComponent } from './Components/Admin/book-details/book-details.component';
import { BooksListComponent } from './Components/Admin/books-list/books-list.component';
import { AllBooksComponent } from './Components/User/all-books/all-books.component';
import { MyBooksComponent } from './Components/User/my-books/my-books.component';
import { ReadBookComponent } from './Components/User/read-book/read-book.component';
import { HomeComponent } from './Shared/components/home/home.component';
import { LoginComponent } from './Shared/components/login/login.component';
import { AboutComponent } from './Shared/components/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Shared/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    EditBookComponent,
    BookDetailsComponent,
    BooksListComponent,
    AllBooksComponent,
    MyBooksComponent,
    ReadBookComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
