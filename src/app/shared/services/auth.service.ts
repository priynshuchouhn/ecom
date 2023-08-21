import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  loginUser(user:{username:string, password:string}){
    if(user){
      console.log(user);
    }
  }
}
