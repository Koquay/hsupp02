import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { BrandSidebarService } from './brand-sidebar/brand-sidebar.service';
import { ProductFilters } from '../shared/filters/product-filters';
import {BrandService} from './brand.service';
import { Product } from '../shared/models/data-model';
import { PaginationService } from '../shared/pagination/pagination.service';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BrandComponent implements OnInit {
  private initialBrand = false;
  private productFilters: ProductFilters;
  private products:Product[];
 

  constructor(
    private brandSidebarService: BrandSidebarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private brandService:BrandService,
    private paginationService:PaginationService
  ) {
    this.productFilters = new ProductFilters();
  }

  ngOnInit() {
    this.getProductFilters();
    this.getPage();
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

  private getPage() {
    this.paginationService.getPaginationSubject().subscribe(pageNo => {
      console.log('pageNo', pageNo)
      this.productFilters.pageNo = pageNo;
      this.getProducts();
    })    
  }

  private sortByProducts(value) {
    console.log('value', value);

    for(let filter of this.productFilters.sortFilters.filters) {
      if(filter.id == value) {
        filter.checked = true;
      } else {
        filter.checked = false;
      }      
    }

    console.log('filters', this.productFilters.sortFilters.filters)
    this.getProducts();
  }
}
