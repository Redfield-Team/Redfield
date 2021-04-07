import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }
  // functionON() {
  //   this.router.navigate(["/Signup"])

  // }
  // functionIn() {
  //   this.router.navigate(["/Signin"])

  // }
  // functionHome() {
  //   this.router.navigate(["/home"])

  // }
  ngOnInit(): void {
  }

}
