import { Injectable } from '@angular/core';

import { ProductFilters } from '../../shared/filters/product-filters';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class BrandSidebarService {
  private productFiltersSubject:Subject<ProductFilters>= new Subject();

  constructor() { }

  public filterProducts(productFilters:ProductFilters) {
    this.productFiltersSubject.next(productFilters);
  }

  public getProductFilters() {
    return this.productFiltersSubject;
  }
}
