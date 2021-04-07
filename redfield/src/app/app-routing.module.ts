import { NgModule } from '@angular/core';
import { Router,RouterModule, Routes } from '@angular/router';
// import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { SignupComponent } from '../app/components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { SigninComponent } from './components/signin/signin.component';
import {UserprofileComponent} from './components/userprofile/userprofile.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component'
import { NavbarmyprofileComponent } from './components/navbarmyprofile/navbarmyprofile.component';




const routes: Routes = [
      {path:"",component:HomeComponent},
    {path:"Signup",component:SignupComponent},
    {path:"Signin",component:SigninComponent},
    {path:"userlog",component:Navbar2Component},
    {path:"offers",component:Navbar2Component},
    {path:"myprofile",component:NavbarmyprofileComponent},
    {path:"editprofile",component:EditprofileComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router:Router){
  }
};
