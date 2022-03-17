import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReportComponent } from './FeaturedModules/add-report/add-report.component';
import { DeleteReportComponent } from './FeaturedModules/delete-report/delete-report.component';
import { EditREportComponent } from './FeaturedModules/edit-report/edit-report.component';
import { ReportDetailsComponent } from './FeaturedModules/report-details/report-details.component';
import { ReportsListComponent } from './FeaturedModules/reports-list/reports-list.component';

const routes: Routes = [
  
  {path:'reports-list',component:ReportsListComponent},
  {path:'add',component:AddReportComponent},
  {path:'add/:no',component:AddReportComponent},
  {path:'edit/:id',component:EditREportComponent},
  {path:'details/:id',component:ReportDetailsComponent},
  {path:'delete',component:DeleteReportComponent},
  {path: '',redirectTo:'/reports-list',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
