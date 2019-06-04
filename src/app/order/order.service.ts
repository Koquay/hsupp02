import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Delivery, Payment, Cart, OrderItem, Order, CartSummary } from '../shared/models/data-model';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderAddUrl = "/api/order/add";
  private order:Order;
  private cartSummary:CartSummary;

  constructor(
    private httpClient: HttpClient,
    private router:Router
  ) { }

  public placeOrder(delivery: Delivery, payment: Payment, cartSummary: CartSummary) {    
    this.cartSummary = Object.assign({}, cartSummary)

    const order = this.createOrder(delivery, payment, cartSummary.cart)
    console.log('orderStr', order)

    return this.httpClient.post<Order>(this.orderAddUrl, { order: order }).pipe(
      tap(order => {
        console.log('new order', order)
        this.order = order;
        this.router.navigate(['/order'])
      })
    )
  }

  public getCartSummary() {
    return of(this.cartSummary);
  }

  public getOrder() {
    return of(this.order)
  }

  private createOrder(delivery: Delivery, payment: Payment, cart: Cart) {
    let orderItems: OrderItem[] = [];

    for (let item of cart.items) {
      orderItems.push(new OrderItem(item.product._id, item.quantity));
    }

    let order: Order = new Order(delivery, payment, orderItems);

    console.log('order', order)

    return JSON.stringify(order);
  }

}
