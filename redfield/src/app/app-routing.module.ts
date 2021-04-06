import { NgModule } from '@angular/core';
import { Router,RouterModule, Routes } from '@angular/router';
// import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { SignupComponent } from '../app/components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';




const routes: Routes = [
    //  {path:"",component:NavbarComponent},
    {path:"Signup",component:SignupComponent},
    {path:"Signin",component:SigninComponent},
    {path:"home",component:HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router:Router){
  }
};
