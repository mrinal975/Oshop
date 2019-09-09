import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private db:AngularFireDatabase) { }
  
  save(product){
    return this.db.list('/products').push(product);
  }
}
