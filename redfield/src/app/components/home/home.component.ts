import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  rediracteTo(){
    this.router.navigate([''])
  }
  functionON() {
    this.router.navigate(["/Signup"])

  }
  functionIn() {
    this.router.navigate(["/Signin"])

  }
  functionHome() {
    this.router.navigate(["/home"])

  }

  ngOnInit(): void {
  }

}
