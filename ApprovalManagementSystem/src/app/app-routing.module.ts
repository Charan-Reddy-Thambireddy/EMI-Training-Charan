import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { BudgetRequestComponent } from './FeaturedModules/buget-approval-management/budget-request/budget-request.component';
import { RequestsListComponent } from './FeaturedModules/buget-approval-management/requests-list/requests-list.component';

const routes: Routes = [
  {path: '',redirectTo:'/home',pathMatch: 'full'}, 
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'Employeedata',component:RequestsListComponent},
  {path:'BudgetRequest',component:BudgetRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
