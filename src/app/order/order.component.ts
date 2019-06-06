import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Order, Cart, CartSummary } from '../shared/models/data-model';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  private order:Order;
  private cartSummary:CartSummary;

  constructor(
    private orderService:OrderService,
    private cartService:CartService
  ) { }

  ngOnInit() {
    this.getOrder();        
  }

  private getOrder() {
    this.orderService.getOrder().subscribe(order =>  {
      this.order = order;
      console.log('order', this.order)
      this.getCartSummary();
    })    
  }

  private getCartSummary() {
    this.orderService.getCartSummary().subscribe(summary => {
      this.cartSummary = summary;
    })
  }

}
