import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable} from 'rxjs';
import { AuthService } from '../auth.service';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user :firebase.User;
  //user : Observable<firebase.User>;
  constructor(private auth:AuthService,private afAuth:AngularFireAuth) {
    //this.auth.userData();
    this.afAuth.authState.subscribe( user => this.user = user);
  }
  // this.user =

  logout(){
    this.auth.signOut();
  }

}
