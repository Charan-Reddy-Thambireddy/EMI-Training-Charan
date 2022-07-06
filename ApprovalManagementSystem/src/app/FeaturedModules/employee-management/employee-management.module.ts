import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AllEmployeeListComponent } from './all-employee-list/all-employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from 'src/app/Shared/Modules/material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { EmsNavigationBarComponent } from './ems-navigation-bar/ems-navigation-bar.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    AllEmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployeeDetailsComponent,
    EmsNavigationBarComponent
  ],
  imports: [
    CommonModule,
    EmployeeManagementRoutingModule,
    MatCardModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class EmployeeManagementModule { }
