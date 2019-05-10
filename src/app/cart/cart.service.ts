import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Cart, CartSummary, Product } from '../shared/models/data-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart;
  public numberOfItems: number = 0;
  private cartSummary: CartSummary;
  private cartUrl = '/api/cart/add/';

  constructor(
    private httpClient: HttpClient
  ) {
    this.cart = new Cart();
    this.cartSummary = new CartSummary();
  }

  public addToCart(product: Product) {
    return this.httpClient.patch<Cart>(this.cartUrl, { product: product }).pipe(
      tap(cart => {
        console.log('cart', cart);
        this.setCart(cart);
      })
    )
  }

  public setCart(cart: Cart) {
    this.cart = cart;
    this.numberOfItems = cart.items.length;
  }
}
