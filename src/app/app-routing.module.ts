import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { HomeComponent } from './home/home.component';
import { SetInfoComponent } from './set-info/set-info.component';
import { GetInfoComponent } from './get-info/get-info.component';


const routes: Routes = [
  {path:'navbar', component:NavbarComponent},
  {path:'home', component:HomeComponent},
  {path:'set-info', component:SetInfoComponent},
  {path:'get-info', component:GetInfoComponent},
  {path:'user',loadChildren:()=> import('./user/user.module').then(m=>m.UserModule)},
  {path:'admin',loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
