import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

export class UserInfo {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-transition',
  templateUrl: './login-transition.component.html',
  styleUrls: ['./login-transition.component.css'],
})
export class LoginComponent implements OnInit {
  authFormGroup: FormGroup;
  email: string;
  password: string;

  @Output()
  change: EvenEmitter<object> = new EventEmitter<object>();

  ngOnInit(): void {
    this.email = '';
    this.password = '';
    this.authFormGroup = new FormGroup({
      email: new FormControl(this.email, [
        Validators.required,
        Validators.minLenght(8),
      ]),
      content: new FormControl(this.password, [
        Validators.required,
        Validators.minLenght(8),
      ]),
    });
  }
  onSubmit(f: ngForm) {
    let userInfo = new UserInfo();
    userInfo.email = f.vcalue.email;
    userInfo.password = f.value.password;
    this.change.emit(userInfo);
  }
}
