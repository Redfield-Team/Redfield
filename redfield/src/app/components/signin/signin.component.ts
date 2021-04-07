import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl} from '@angular/forms';
import { UserService } from '../services/user.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup
  constructor(private logUsers:FormBuilder, private objectService: UserService , private router:Router) {
    this.signinForm = this.logUsers.group({
      email : [''],
      password: [''],
    })
  }
    submit(){
      this.objectService
      .logUsers(this.signinForm.value)
      .subscribe(object => {
        localStorage.setItem('tkn', JSON.stringify(object))
       console.log(JSON.parse(localStorage.tkn).token)
       Swal.fire({
        icon: 'success',
        title: 'Your account is created successfully',
        showConfirmButton: false,
        timer: 2000
      })

      setTimeout(()=>{ this.router.navigate(['/userlog'])}, 3000);



      }




    )


    }

    // check(){
    //   if(this.signinForm.value.email===undefined || this.signinForm.value.password===undefined){
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Your account is created successfully',
    //       showConfirmButton: false,
    //       timer: 2000
    //     })
    //   }
    // }



  ngOnInit(): void {
  }

}
