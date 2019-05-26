import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {Alert}  from './alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alerts:Subject<Alert> = new Subject();

  constructor() { }

  public publishError(errorAlert:Alert) {
    this.alerts.next(errorAlert);
  }
}
