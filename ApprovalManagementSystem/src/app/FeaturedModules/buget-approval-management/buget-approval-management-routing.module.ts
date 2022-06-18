import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetRequestComponent } from './budget-request/budget-request.component';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { EmployeeRequestComponent } from './employee-request/employee-request.component';
import { RequestsListComponent } from './requests-list/requests-list.component';

const routes: Routes = [
  {path:'edit-request/:id', component:EditRequestComponent},
  {path:'Request-list',component:RequestsListComponent},
  {path:'BudgetRequest',component:BudgetRequestComponent},
  {path:'EmployeeRequests',component:EmployeeRequestComponent},
  {path:'',component:BudgetRequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BugetApprovalManagementRoutingModule { }
