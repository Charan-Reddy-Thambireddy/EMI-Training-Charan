import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugetApprovalManagementRoutingModule } from './buget-approval-management-routing.module';
import { BudgetRequestComponent } from './budget-request/budget-request.component';
import { RequestsListComponent } from './requests-list/requests-list.component';


@NgModule({
  declarations: [
    BudgetRequestComponent,
    RequestsListComponent
  ],
  imports: [
    CommonModule,
    BugetApprovalManagementRoutingModule
  ]
})
export class BugetApprovalManagementModule { }
