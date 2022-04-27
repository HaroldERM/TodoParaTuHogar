import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  user: Observable<any>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  // Register
  register(email: string, password: string): any {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('Successfully signed up!', res);
      })
      .catch((error) => {
        console.log('Something went wrong', error.message);
      });
  }

  // Login
  login(email: string, password: string): any {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('Successfully signed in!', res);
      })
      .catch((err) => {
        console.log('Something went wrong', err.message);
      });
  }

  // Logout
  logout(): void {
    this.firebaseAuth.signOut();
  }

  getUserId(): any {
    return this.firebaseAuth.authState.pipe(
      Map((each) => {
        return each.uid;
      })
    );
  }

  deleteAccount(): void {
    this.fireAuth.authState.subscribe((authState) => {
      authState
        .delete()
        .then((res) => {
          console.log('Successfully deleted user', res);
        })
        .catch((error) => {
          console.log('Something went wrong', error.message);
        });
    });
  }
}
