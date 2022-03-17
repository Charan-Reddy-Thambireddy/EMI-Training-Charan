import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportsListComponent } from './FeaturedModules/reports-list/reports-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddReportComponent } from './FeaturedModules/add-report/add-report.component';
import { EditREportComponent } from './FeaturedModules/edit-report/edit-report.component';
import { ReportDetailsComponent } from './FeaturedModules/report-details/report-details.component';
import { DeleteReportComponent } from './FeaturedModules/delete-report/delete-report.component';
import { ReportsModule } from './FeaturedModules/reports.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReportsListComponent,
    AddReportComponent,
    EditREportComponent,
    ReportDetailsComponent,
    DeleteReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReportsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
