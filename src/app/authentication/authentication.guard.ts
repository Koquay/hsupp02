import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate  {
  canActivate() {
    const user = JSON.parse(localStorage.getItem('user'));

    if(user) {
      return true;
    }

    const error = {error: 'You must be logged in to proceed.', status:500};
    throw new HttpErrorResponse(error);
  }
}
