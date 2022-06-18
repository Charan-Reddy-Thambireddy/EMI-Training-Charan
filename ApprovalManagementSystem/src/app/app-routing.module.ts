import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApmsGuard } from './Gaurds/apms.guard';
import { LoginGuard } from './Gaurds/login.guard';
import { AboutComponent } from './Shared/Components/about/about.component';
import { HomeComponent } from './Shared/Components/home/home.component';
import { LoginTemplateComponent } from './Shared/Components/login-template/login-template.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'apms',loadChildren:()=>import('./FeaturedModules/buget-approval-management/buget-approval-management.module')
  .then(module=>module.BugetApprovalManagementModule),canActivate:[ApmsGuard]},
  {path:'ems',loadChildren:()=>import('./FeaturedModules/employee-management/employee-management.module')
  .then(module=>module.EmployeeManagementModule)},
  {path:'login',component:LoginTemplateComponent,canActivate:[LoginGuard]},
  {path: '',redirectTo:'/login',pathMatch: 'full'},
  {path:'**', redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
