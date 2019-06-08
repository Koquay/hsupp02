import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap, map, catchError} from 'rxjs/operators';

import {CartService} from '../cart/cart.service';
import {Cart} from '../shared/models/data-model';
import { ErrorService } from '../shared/error/error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSigninUrl = '/api/user/signin';
  // private userSigninUrl = 'http://localhost:4600/api/user/signin';
  
  private userLogin = false;

  constructor(
    private httpClient:HttpClient,
    private cartService:CartService,
    private errorService:ErrorService
  ) { }

  public signIn(credentials) {
    console.log('credentials', credentials);

    return this.httpClient.post<{user, cart}>(this.userSigninUrl, credentials).pipe(
      map(userData => {              
        this.cartService.setCart(userData.cart);   
        return userData.user;
      }),
      catchError(this.handleError.bind(this))
    )
  }  

  private handleError(error) {
    console.log('authentication.service#error', error);
    return this.errorService.handleError(error);
  }
}
