import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsListComponent } from './FeaturedModules/reports-list/reports-list.component';

const routes: Routes = [
  {path: '',redirectTo:'/reports-list',pathMatch: 'full'},
  {path:'reports-list',component:ReportsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
