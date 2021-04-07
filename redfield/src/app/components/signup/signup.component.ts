import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms';
import { UserService } from '../services/user.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup
  constructor(private addUser:FormBuilder, private objectService: UserService, private router:Router) {
    this.signupForm = this.addUser.group({
      fName : [''],
      lName : [''],
      email : ['',Validators.email],
      password: [''],
      phoneNumber: [''],
    })
   }
   submit(){
     if(this.signupForm.valid){
      this.objectService
      .addUsers(this.signupForm.value)
      .subscribe(object => {console.log(object)})

     }
     Swal.fire({
      icon: 'success',
      title: 'Your account is created successfully',
      showConfirmButton: false,
      timer: 2000
    })

    setTimeout(()=>{ this.router.navigate(['/Signin'])}, 3000);

  }


  ngOnInit(): void {
  }

}
