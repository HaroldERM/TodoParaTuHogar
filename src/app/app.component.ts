import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { UserInfo } from './login.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  email: string;
  password: string;

  constructor(public firebaseService: FirebaseService) {}

  signup() {
    this.firebaseService.signup(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signup() {
    this.firebaseService.signup(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  logout() {
    this.firebaseService.logout();
  }
}
