import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import {HeaderService} from './header.service';
import {CartService} from '../cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private credentials: {name:string, email:string, password:string, token:string};

  constructor(
    private authService:AuthenticationService, 
    private headerService:HeaderService,
    private cartService:CartService
  ) {
    this.credentials = {name:'John Admin', email: 'admin@admin.com', password: 'admin', token: ''};
   }

  ngOnInit() {
  }

  public signIn() {
    this.authService.signIn(this.credentials).subscribe(user => {
      console.log('user', user)
      this.headerService.saveUser(user);
    })
  }

}
