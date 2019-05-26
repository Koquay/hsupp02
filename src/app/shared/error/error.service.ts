import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import {AlertService} from '../alerts/alert.service';
import {Alert} from '../alerts/alert';
import {AlertType} from '../alerts/alert-type.enum';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private alertService:AlertService) { }

  public handleError(error:HttpErrorResponse) {
    console.log('\nErrorService#handleError');
    console.log('error', error)

    const message = (error.error instanceof ErrorEvent) ?
      error.error.message : `Error code: ${error.error.statusCode} - ${error.error.customMessage}`;
    console.log('error message', message)

    const errorAlert=new Alert(message, AlertType.DANGER);
    this.alertService.publishError(errorAlert);
    throwError(error);      
  }
  
}
