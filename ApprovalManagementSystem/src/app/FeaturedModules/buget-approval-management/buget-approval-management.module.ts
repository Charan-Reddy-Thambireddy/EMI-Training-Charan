import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugetApprovalManagementRoutingModule } from './buget-approval-management-routing.module';
import { BudgetRequestComponent } from './budget-request/budget-request.component';
import { RequestsListComponent } from './requests-list/requests-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select';
import { AppModule } from 'src/app/app.module';


@NgModule({
  declarations: [
    RequestsListComponent

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    BugetApprovalManagementRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatOptionModule,
    MatSelectModule,
    AppModule
  ]
})
export class BugetApprovalManagementModule { }
