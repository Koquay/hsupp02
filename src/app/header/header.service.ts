import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public isSignedIn = false;

  constructor() { }

  public saveUser(user) {
    localStorage.setItem('user', user);
    this.isSignedIn = true;
  }
}
