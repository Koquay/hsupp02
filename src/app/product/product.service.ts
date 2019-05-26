import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorService } from '../shared/error/error.service';

import { Product } from '../shared/models/data-model';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = '/api/product/';

  constructor(
    private httpClient:HttpClient,
    private errorService:ErrorService
  ) { }

  public getProductById(id:string) : Observable<Product>{
    return this.httpClient.get<Product>(`${this.productUrl}${id}`).pipe(
      tap(product => console.log('product', product)),
      catchError(this.handleError.bind(this))
    )
  }

  private handleError(error) {
    console.log('product.service#error', error);
    return this.errorService.handleError(error);
  }
}
