import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CartSummary } from '../shared/models/data-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartSummary: CartSummary;
  
  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.getCartSummary();
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
