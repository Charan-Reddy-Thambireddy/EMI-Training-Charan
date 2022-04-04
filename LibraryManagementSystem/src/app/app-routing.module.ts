import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/Shared/login/login.component';
import { AdminGuard } from './Gaurds/admin.guard';

const routes: Routes = [

  {path:'admin',loadChildren:()=>import('./FeatureModules/admin/admin.module')
  .then(module=>module.AdminModule),canActivate:[AdminGuard]},
  {path:'user',loadChildren:()=>import('./FeatureModules/user/user.module')
  .then(module=>module.UserModule)},
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
