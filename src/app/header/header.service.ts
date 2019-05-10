import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public isSignedIn = false;

  constructor() { }

  public saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    console.log('user from localstoorage', localStorage.getItem('user'))
    this.isSignedIn = true;
  }
}
