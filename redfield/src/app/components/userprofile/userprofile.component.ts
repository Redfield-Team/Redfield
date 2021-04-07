import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  dataUser : any
  constructor(private router:Router, private service: UserService)  { }
  redirect(){
    this.router.navigate(['/editprofile'])
    this.getData()
  }




  ngOnInit(): void {
  this.dataUser = this.service.getData()

  }


  getData(){



  }

}
