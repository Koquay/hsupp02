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

  public handleError1(error:HttpErrorResponse) {
    console.log('### ErrorService#handleError ###');
    const message = (error.error instanceof ErrorEvent) ?
      error.error.message : `Error code: ${error.status} - ${error.error}`;
    console.log('error message', message);

    const errorAlert = new Alert(message, AlertType.DANGER);
    this.alertService.publishError(errorAlert);
    throwError(error);
  }

  public handleError(error) {
    console.log('### ErrorService#handleError ###');
    const message =  `Error: ${error.errorStatus} - ${error.errorMessage}`;
    console.log('error message', message);

    const errorAlert = new Alert(message, AlertType.DANGER);
    this.alertService.publishError(errorAlert);
    throwError(error);
  }
}
