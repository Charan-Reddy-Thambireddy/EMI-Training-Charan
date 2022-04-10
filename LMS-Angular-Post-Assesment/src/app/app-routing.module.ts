import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './Components/Admin/add-book/add-book.component';
import { BookDetailsComponent } from './Components/Admin/book-details/book-details.component';
import { BooksListComponent } from './Components/Admin/books-list/books-list.component';
import { EditBookComponent } from './Components/Admin/edit-book/edit-book.component';
import { AllBooksComponent } from './Components/User/all-books/all-books.component';
import { MyBooksComponent } from './Components/User/my-books/my-books.component';
import { ReadBookComponent } from './Components/User/read-book/read-book.component';
import { AdminGuard } from './Gaurds/admin.guard';
import { LoginGuard } from './Gaurds/login.guard';
import { UserGuard } from './Gaurds/user.guard';
import { HomeComponent } from './Shared/components/home/home.component';
import { LoginComponent } from './Shared/components/login/login.component';

const routes: Routes = [
  
  {path:'login',component:LoginComponent,canActivate:[LoginGuard]},
  {path:'home',component:HomeComponent},
  {path:'add-book',component:AddBookComponent,canActivate:[AdminGuard]},
  {path:'update-book/:id', component:EditBookComponent,canActivate:[AdminGuard]},
  {path:'books-list',component:BooksListComponent,canActivate:[AdminGuard]},
  {path:'details/:id',component:BookDetailsComponent,canActivate:[AdminGuard]},
  {path:'all-books', component:AllBooksComponent,canActivate:[UserGuard]},
  {path:'my-books',component:MyBooksComponent,canActivate:[UserGuard]},
  {path:'read-book/:id',component:ReadBookComponent,canActivate:[UserGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'**', redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
