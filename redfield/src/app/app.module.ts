import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';


import { NavbarComponent } from './components/navbar/navbar.component';

import {RouterModule, Routes} from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { Navbar3Component } from './components/navbar3/navbar3.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { NavbarmyprofileComponent } from './components/navbarmyprofile/navbarmyprofile.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component'

const appRoutes: Routes = [
];


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    Navbar2Component,
    Navbar3Component,
    UserprofileComponent,
    NavbarmyprofileComponent,
    EditprofileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // NgbModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
