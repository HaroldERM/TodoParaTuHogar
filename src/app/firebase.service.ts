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
  register(email: string, password: string) {
    this.firebaseAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Successfully signed up!', value);
      })
      .catch((error) => {
        console.log('Something went wrong', error.message);
      });
  }

  // Login
  login(email: string, password: string) {
    this.firebaseAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Successfully signed in!', value);
      })
      .catch((error) => {
        console.log('Something went wrong', error.message);
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
