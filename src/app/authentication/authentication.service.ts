import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap, map, catchError} from 'rxjs/operators';

import {CartService} from '../cart/cart.service';
import {Cart} from '../shared/models/data-model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSigninUrl = 'http://localhost:4500/api/user/signin';
  private userLogin = false;

  constructor(
    private httpClient:HttpClient,
    private cartService:CartService
  ) { }

  public signIn(credentials) {
    console.log('credentials', credentials);

    return this.httpClient.post<{user:{}, cart:Cart}>(this.userSigninUrl, credentials).pipe(
      map(userData => {
        console.log('userData', userData);
        this.cartService.setCart(userData.cart);   
        return userData.user;
      })
    )
  }  
}
