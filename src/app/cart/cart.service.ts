import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

import { Cart, CartSummary, Product } from '../shared/models/data-model';
import { ErrorService } from '../shared/error/error.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart;
  public numberOfItems: number = 0;
  private cartSummary: CartSummary;
  private cartAddUrl = '/api/cart/add';
  private cartDeleteUrl = '/api/cart/delete/';

  constructor(
    private httpClient: HttpClient,
    private errorService:ErrorService
  ) {
    this.cart = new Cart();
    this.cartSummary = new CartSummary();
  }

  public addToCart(product: Product, quantity:number=1) {
    return this.httpClient.patch<Cart>(this.cartAddUrl, { product: product, quantity:quantity }).pipe(
      tap(cart => {
        console.log('cart', cart);
        if(cart.errorMessage) {
          this.errorService.handleError(cart);
        } else {
          this.setCart(cart);
        }        
      })
    )
  }

  public deleteItem(itemId) {
    return  this.httpClient.delete<Cart>(`${this.cartDeleteUrl}${itemId}`).pipe(
      tap(cart => {
        console.log('cart after delete', cart)
        this.setCart(cart);
      })
    )
  }

  public setCart(cart) {
    this.cart = cart;
    this.numberOfItems = cart.items.length;
  }

  public getCartSummary() {
    this.cartSummary.cart = this.cart;
    this.cartSummary.subtotal = this.getCartSubtotal();
    this.cartSummary.discount = this.getDiscount();
    this.cartSummary.numberOfItems = this.numberOfItems;
    this.cartSummary.tax = this.getTax();
    this.cartSummary.total = this.getCartTotal();
    return of(this.cartSummary);
  }

  public resetCart() {
    this.cartSummary = new CartSummary();
    this.cart = new Cart();
    this.numberOfItems = 0;
  }

  public getTax() {
    return this.getCartSubtotal() * 0.05;
  }

  public getDiscount() {
    return this.getCartSubtotal() * 0.10;
  }

  public getCartTotal() {
    return this.getCartSubtotal() + this.getTax() - this.getDiscount();

  }

  public getCartSubtotal() {
    let subtotal = 0;

    for(let item of this.cart.items) {
      subtotal += item.product.price * item.quantity;
    }

    return subtotal;
  }
}
