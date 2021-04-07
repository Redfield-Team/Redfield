import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private router:Router)  { }
  redirect(){
    this.router.navigate(['/editprofile'])
  }

  

  ngOnInit(): void {
  }

}
