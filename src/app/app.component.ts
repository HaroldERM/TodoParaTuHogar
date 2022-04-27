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

  register() {
    this.firebaseService.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  login() {
    this.firebaseService.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  logout() {
    this.firebaseService.logout();
  }
}
