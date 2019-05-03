import { Injectable } from '@angular/core';

import {Cart, CartSummary} from '../shared/models/data-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart;
  public numberOfItems:number = 0;
  private cartSummary:CartSummary;

  constructor() {
    this.cart = new Cart();
    this.cartSummary = new CartSummary();
   }

  public setCart(cart:Cart) {
    this.cart = cart;
    this.numberOfItems = cart.items.length;    
  }
}
