import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { BrandSidebarService } from './brand-sidebar/brand-sidebar.service';
import { ProductFilters } from '../shared/filters/product-filters';
import {BrandService} from './brand.service';
import { Product } from '../shared/models/data-model';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  private initialBrand = false;
  private productFilters: ProductFilters;
  private products:Product[];

  constructor(
    private brandSidebarService: BrandSidebarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private brandService:BrandService
  ) {
    this.productFilters = new ProductFilters();
  }

  ngOnInit() {
    this.getProductFilters();
  }

  private getProductFilters() {
    this.brandSidebarService.getProductFilters().subscribe(productFilters => {
      console.log('productFilters', productFilters)
      this.productFilters = productFilters;
      this.getProducts();
    })
  }

  private getProducts() {
    this.brandService.getProducts(this.productFilters).subscribe(products => {
      this.products = products;
    })
  }

}
