import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './user.service';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService:UserService,private auth : AuthService,router:Router,private afAuth:AngularFireAuth){
    this.afAuth.authState.subscribe( user => {
      // if(user){
      //   userService.save(user);
      // }
    });

  }
}
