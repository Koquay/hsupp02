import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { ProductFilters } from '../shared/filters/product-filters';
import {Product} from '../shared/models/data-model';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private productsUrl = '/api/product/';

  constructor(
    private httpClient:HttpClient
  ) { }

  public getProducts(productFilters:ProductFilters) : Observable<Product[]> {
    const queryParams = this.createQueryParams(productFilters);

    return this.httpClient.get<Product[]>(`${this.productsUrl}${queryParams}`).pipe(
      tap(products => console.log('products', products))
    )
  }

  private createQueryParams(productFilters:ProductFilters) {
    let brandFilters = productFilters.brandFilters.brands.filter(brand => {
      if(brand.checked) return brand.name;
    });
    console.log('brands', brandFilters);

    const brands = [];
    for(let brand of brandFilters) {
      brands.push(brand.name)
    }

    const filters = JSON.stringify({
      brands: brands
    })

    const queryParams = `?filters=${filters}`;
    console.log('queryParams', queryParams);
    return queryParams;
  }
}
