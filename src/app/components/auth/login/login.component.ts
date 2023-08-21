import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    loginForm!: FormGroup;
    errorString = false;

    constructor(private auth: AuthService){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username' : new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.errorString = false
      this.auth.loginUser(this.loginForm.value)
    }else{
      this.errorString = true
    }
  }

}
