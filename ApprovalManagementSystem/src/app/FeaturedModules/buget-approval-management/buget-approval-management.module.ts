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
import { MaterialModule } from 'src/app/Shared/Modules/material/material.module';
import { MatCardModule } from '@angular/material/card';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApmsnavigationbarComponent } from './apmsnavigationbar/apmsnavigationbar.component';
import { EmployeeRequestComponent } from './employee-request/employee-request.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CommentDailogComponent } from './comment-dailog/comment-dailog.component';



@NgModule({
  declarations: [
    BudgetRequestComponent,
    RequestsListComponent,
    EditRequestComponent,
    ApmsnavigationbarComponent,
    EmployeeRequestComponent,
    RequestDetailsComponent,
    FileUploadComponent,
    CommentDailogComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    BugetApprovalManagementRoutingModule,  
    MatCardModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class BugetApprovalManagementModule { }
