import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    console.log('activatedRoute', this.activatedRoute)
    console.log('router', this.router)
    
  }

}
