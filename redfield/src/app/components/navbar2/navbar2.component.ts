import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  constructor(private router:Router) { }
  rediracteTo(){
    this.router.navigate(['/offers'])
  }
  logout(){
    localStorage.clear();
    this.router.navigate([''])
  }
  redirect(){
    this.router.navigate(['/myprofile'])

  }


  ngOnInit(): void {
  }

}
