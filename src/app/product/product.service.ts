import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../shared/models/data-model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = '/api/product/';

  constructor(
    private httpClient:HttpClient
  ) { }

  public getProductById(id:string) : Observable<Product>{
    return this.httpClient.get<Product>(`${this.productUrl}${id}`).pipe(
      tap(product => console.log('product', product))
    )
  }
}
