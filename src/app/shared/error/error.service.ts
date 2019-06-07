import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';

import {AlertService} from '../alerts/alert.service';
import {Alert} from '../alerts/alert';
import {AlertType} from '../alerts/alert-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private alertService:AlertService
  ) { }

  public handleError(error) {
    console.log('### ErrorService#handleError ###');
    console.log('error', error);
    console.log('error.error', error.error);

    let errorMessage = error.error.message || error.message;
    let errorStatus = error.error.status || error.status;
    const message =  `Error: ${errorStatus} - ${errorMessage}`;
    console.log('error message', message);

    const errorAlert = new Alert(message, AlertType.DANGER);
    this.alertService.publishError(errorAlert);
    throwError(error);
  }
}
