import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Delivery, Payment, Cart, OrderItem, Order } from '../shared/models/data-model';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderAddUrl = "/api/order/add";

  constructor(
    private httpClient: HttpClient,
    private router:Router
  ) { }

  public placeOrder(delivery: Delivery, payment: Payment, cart: Cart) {
    const order = this.createOrder(delivery, payment, cart)
    console.log('orderStr', order)

    return this.httpClient.post<Order>(this.orderAddUrl, { order: order }).pipe(
      tap(order => {
        console.log('new order', order)
        this.router.navigate(['/order', order._id])
      })
    )
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
