import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { BooksTakenComponent } from './books-taken/books-taken.component';
import { ReadBookComponent } from './read-book/read-book.component';
import { UserNavComponent } from './user-nav/user-nav.component';

const routes: Routes = [
  {path:'',component:UserNavComponent,children:[
    {path:'bookstaken',component:BooksTakenComponent},
   {path:'allbooks',component:AllbooksComponent},
   {path:'read-book/:id',component:ReadBookComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
