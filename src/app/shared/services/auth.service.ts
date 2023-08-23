import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  errorMessage = new Subject<string>();

  constructor(private router: Router, private location: Location) { }

  tempUser: User = {
    user_id: 1,
    user_name: 'Priyanshu Chouhan',
    email: 'priynshuchouhan@gmail.com',
    mobile_number: '7339996617',
    address: '2 K 4 Old Housing Board'
  }

  validateUsername(username: string): 'mobile' | 'email' | 'invalid' {
    const mobileRegex = /^\d{10}$/; // Assuming a 10-digit mobile number pattern
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Basic email pattern

    if (mobileRegex.test(username)) {
      return 'mobile';
    } else if (emailRegex.test(username)) {
      return 'email';
    } else {
      return 'invalid';
    }
  }

  loginUser(user: { username: string, password: string }) {
    const userNameType = this.validateUsername(user.username)
    if (userNameType == 'mobile') {
      if (user.username == this.tempUser.mobile_number) {
        localStorage.setItem('user', JSON.stringify(this.tempUser));
        JSON.parse(localStorage.getItem('user')!);
        this.router.navigate(['']);
        // this.router.navigate(['/previous-route']);
        this.location.historyGo(-2);
      } else {
        this.errorMessage.next("invalid Login Credantials")
      }
    } else {
      if (user.username == this.tempUser.email) {
        localStorage.setItem('user', JSON.stringify(this.tempUser));
        JSON.parse(localStorage.getItem('user')!);
        this.router.navigate(['']);
      } else {
        this.errorMessage.next("invalid Login Credantials");
      }
    }
  }


  signOut() {
    localStorage.clear();
    localStorage.removeItem('user');
    // this.router.navigate(['']);
  }
}
