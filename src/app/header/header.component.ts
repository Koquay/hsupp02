import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs/observable/interval'

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
  private isOverlay = false;
  private marqueeContents;
  private marquee;

  constructor(
    private authService:AuthenticationService, 
    private headerService:HeaderService,
    private cartService:CartService,    
  ) {
    this.credentials = {name:'John Admin', email: 'admin@admin.com', password: 'admin', token: ''};
   }

  ngOnInit() {    
    this.startMarquee();  
  }

  public signIn() {
    this.authService.signIn(this.credentials).subscribe(user => {
      console.log('user', user)
      this.headerService.saveUser(user);
    })
  }  

  private showOverlay() {
    console.log('SHOW OVERLAY')
    this.isOverlay = true;
  }

  private hideOverlay() {
    console.log('HIDE OVERLAY')
    this.isOverlay = false;
  }

  private startMarquee() {    
    let marqueeInterval = interval(4000);
    let index = 0;

    this.initMarquee();

    marqueeInterval.subscribe(() => {
      this.marquee = this.marqueeContents[index++]
      if(index==this.marqueeContents.length) {
        index=0;
      }
    })
  }

  private initMarquee() {
    this.marqueeContents = ['FREE 2-DAY DELIVERY', 'BUY 1 GET 1 FREE'];
    this.marquee = this.marqueeContents[0];
  }

}
