import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CartSummary } from '../shared/models/data-model';
import { AlertService } from '../shared/alerts/alert.service';
import { Alert } from '../shared/alerts/alert';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [AlertService]
})
export class CartComponent implements OnInit {
  private cartSummary: CartSummary;
  private alerts: Array<Alert> = [];
  
  constructor(
    private cartService:CartService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.getAlerts();
    this.getCartSummary();
  }

  private getAlerts() {
    this.alertService.alerts.subscribe(alert => {
      this.alerts.push(alert)
      console.log('alerts', this.alerts)
    })
  }

  private getCartSummary = () => {
    this.cartService.getCartSummary().subscribe(cartSummary => {
      this.cartSummary = cartSummary;
      console.log('cartSummary', this.cartSummary)
    })
  }

  private deleteItem = (itemId) => {
    this.cartService.deleteItem(itemId).subscribe(cart => {
      this.getCartSummary();
    });
  }

}
