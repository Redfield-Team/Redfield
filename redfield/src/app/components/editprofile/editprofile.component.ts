import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  updateForm: FormGroup
  constructor(private updateUser:FormBuilder, private objectService: UserService, private router:Router) {
    this.updateForm = this.updateUser.group({
      fName : [''],
      lName : [''],
      email : ['',Validators.email],
      password: [''],
      phoneNumber: [''],
    })
   }
  rediracteIn(){
      if(this.updateForm.valid){
       this.objectService
       .updateUser(this.updateForm.value)
       .subscribe(object => {console.log(object , 'laaa')})
      }
      this.router.navigate(['/myprofile'])
    }

  ngOnInit(): void {
    this.rediracteIn
}
}
