import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { BooksListComponent } from './books-list/books-list.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

const routes: Routes = [
  {path:'',component:BooksListComponent},
  {path:'list',component:BooksListComponent},
  {path:'add',component:AddBookComponent},
  {path:'edit/:id',component:EditBookComponent},
  {path:'delete/:id',component:DeleteBookComponent},
  {path:'details/:id',component:BooksDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
