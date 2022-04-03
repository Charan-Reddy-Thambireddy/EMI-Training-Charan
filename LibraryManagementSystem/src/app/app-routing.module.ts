import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/Shared/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',loadChildren:()=>import('./FeatureModules/admin/admin.module')
  .then(module=>module.AdminModule)},
  {path:'user',loadChildren:()=>import('./FeatureModules/user/user.module')
  .then(module=>module.UserModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
