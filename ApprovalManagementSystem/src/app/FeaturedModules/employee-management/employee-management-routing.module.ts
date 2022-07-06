import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AllEmployeeListComponent } from './all-employee-list/all-employee-list.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {path:'edit-employee/:id', component:EditEmployeeComponent},
  {path:'details-employee/:id', component:EmployeeDetailsComponent},
  {path:'Employee-list',component:EmployeeListComponent},
  {path:'AddEmployee',component:AddEmployeeComponent},
  {path:'AllEmployees',component:AllEmployeeListComponent},
  {path:'',redirectTo:'AllEmployees'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeManagementRoutingModule { }
