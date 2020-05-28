import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { OwnerdetailsComponent } from './ownerdetails/ownerdetails.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BuildingwiseinfoComponent } from './buildingwiseinfo/buildingwiseinfo.component';
import { LogoutComponent } from './logout/logout.component';




const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'myprofile', component: MyprofileComponent},
  {path: 'ownerdetails', component: OwnerdetailsComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'addstudent', component: AddstudentComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'buildingwiseinfo', component: BuildingwiseinfoComponent},
  {path: 'logout',component: LogoutComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
