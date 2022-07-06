import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetApprovalEmiModule } from 'budget-approval-emi';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { BudgetRequestComponent } from './FeaturedModules/buget-approval-management/budget-request/budget-request.component';
import { LoginTemplateComponent } from './Shared/Components/login-template/login-template.component';
import { HomeComponent } from './Shared/Components/home/home.component';
import { AboutComponent } from './Shared/Components/about/about.component';
import { MaterialModule } from './Shared/Modules/material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestsListComponent } from './FeaturedModules/buget-approval-management/requests-list/requests-list.component';
import { CommonModule } from '@angular/common';
import { EditRequestComponent } from './FeaturedModules/buget-approval-management/edit-request/edit-request.component';
import { DatePipe } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    LoginTemplateComponent,
    HomeComponent,
    AboutComponent,
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BudgetApprovalEmiModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
