import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../shared/error/error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate  {
  constructor(private errorService:ErrorService) {}
  
  canActivate() {
    const user = JSON.parse(localStorage.getItem('user'));

    if(user) {
      return true;
    }

    const error = {error: 'You must be logged in to proceed.', status:500};    
    return this.handleError(new HttpErrorResponse(error));
  }

  private handleError(error) {
    console.log('error', error);
    this.errorService.handleError(error);
    return false;
  }
}
