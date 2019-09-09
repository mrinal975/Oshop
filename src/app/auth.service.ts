import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ :firebase.User;
  constructor(private afAuth:AngularFireAuth) {
    this.afAuth.authState.subscribe( user => this.user$ = user);
  }
 login(){
   this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
 }
 signOut(){
    this.afAuth.auth.signOut();
  }
}
