import { Component, OnInit } from '@angular/core';

import { AlertService } from '../shared/alerts/alert.service';
import { Alert } from '../shared/alerts/alert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private alerts: Array<Alert> = [];

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.getAlerts();
  }

  private getAlerts() {
    this.alertService.alerts.subscribe(alert => {
      this.alerts.push(alert)
      console.log('alerts', this.alerts)
    })
  }

}
