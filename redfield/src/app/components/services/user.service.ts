import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 dataUser  : any;
  constructor(private http:HttpClient) { }
  addUsers(object: Object){
    return this.http.post('http://localhost:3000/user/signup' , object)

}

logUsers(object: Object){
  return this.http.post('http://localhost:3000/user/login' , object)

}
updateUser(object: Object){
  console.log(object , 'liiaallaala')
  return this.http.put('http://localhost:3000/user/update' , object)

}

getData(){
   return this.dataUser
}
setter(data:any){
this.dataUser = data
}
}
