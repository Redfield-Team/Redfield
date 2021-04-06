import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl} from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup
  constructor(private addUser:FormBuilder, private objectService: UserService) {
    this.signupForm = this.addUser.group({
      fName : [''],
      lName : [''],
      email : [''],
      password: [''],
      phoneNumber: [''],
    })
   }
   submit(){
    this.objectService
    .addUsers(this.signupForm.value)
    .subscribe(object => {console.log(object)}) 
  }


  ngOnInit(): void {
  }

}
