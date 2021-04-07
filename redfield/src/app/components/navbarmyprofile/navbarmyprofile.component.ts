import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-navbarmyprofile',
  templateUrl: './navbarmyprofile.component.html',
  styleUrls: ['./navbarmyprofile.component.css']
})
export class NavbarmyprofileComponent implements OnInit {

  constructor(private router:Router) { }
  rediracteToMyOff(){
    this.router.navigate(['/myprofile'])
  }
  ngOnInit(): void {
  }

}
