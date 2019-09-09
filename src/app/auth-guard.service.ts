import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
@Injectable()
export class AuthGuardService {

  constructor(private auth:AuthService,private router :Router,private afAuth:AngularFireAuth) { }

   canActivate(){
     this.afAuth.authState.subscribe( user => 
      {
        if(user) return true;
         this.router.navigate(['/login']);
        return false;
        // if(!user){
        //   return this.router.navigate(['/login']);
        // }
      });

  }
}
