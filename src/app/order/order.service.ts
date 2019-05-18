import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Delivery, Payment, Cart, OrderItem, Order } from '../shared/models/data-model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderUrl = "/api/order/";

  constructor(
    private httpClient:HttpClient
  ) { }

  public placeOrder(delivery: Delivery, payment: Payment, cart: Cart) {
    const order = this.createOrder(delivery, payment, cart)
    console.log('orderStr', order)

    return this.httpClient.post<Order>(this.orderUrl, {order: order}).pipe(
      tap(order => console.log('new order', order))
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