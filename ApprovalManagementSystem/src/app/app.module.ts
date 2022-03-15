import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { LoginTemplateComponent } from './Components/login-template/login-template.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginTemplateComponent,
    AboutComponent ,
    BudgetRequestComponent 
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
