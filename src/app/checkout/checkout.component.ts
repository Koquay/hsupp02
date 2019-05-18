import { Component, OnInit } from '@angular/core';
import { Payment, Delivery, CartSummary } from '../shared/models/data-model';
import { CheckoutService } from './checkout.service';
import { CartService } from '../cart/cart.service';
import { OrderService } from '../order/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  private delivery:Delivery;
  private payment:Payment;
  private citiesStates;
  private expMonths;
  private expYears;
  private cartSummary:CartSummary
  private minDate = new Date();
  private maxDate = new Date();

  constructor(
    private checkoutService:CheckoutService,
    private cartService:CartService,
    private orderService:OrderService
  ) { 
    this.delivery = new Delivery()
    this.payment = new Payment();
  }

  ngOnInit() {
    this.getStaticData();
    this.getCartSummary();
    this.setDeliveryDate();
  }

  private placeOrder() {
    console.log('delivery', this.delivery)
    console.log('payment', this.payment)
    this.orderService.placeOrder(this.delivery, this.payment, this.cartSummary.cart)
      .subscribe();
  }

  private setDeliveryDate() {
    // this.minDate.setDate(this.minDate.getDay() + 14)
    this.maxDate.setDate(new Date().getDay() +  14)
  }

  private getCartSummary() {
    this.cartService.getCartSummary().subscribe(cartSummary => {
      this.cartSummary = cartSummary
    })
  }

  private getStaticData() {
    this.checkoutService.getStaticData().subscribe(data => {
      this.citiesStates = data[0];
      this.expMonths = data[1];
      this.expYears = data[2];      
    })
  }

  private setCityState(value) {
    console.log('value', value)
    this.delivery.cityState = value;
  }
}
