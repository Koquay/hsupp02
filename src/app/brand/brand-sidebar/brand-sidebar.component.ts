import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

import {BrandSidebarService} from './brand-sidebar.service';
import {ProductFilters} from '../../shared/filters/product-filters';

@Component({
  selector: 'app-brand-sidebar',
  templateUrl: './brand-sidebar.component.html',
  styleUrls: ['./brand-sidebar.component.scss']
})
export class BrandSidebarComponent implements OnInit {
  private productFilters:ProductFilters;
  private initialBrand = false;

  constructor(
    private brandSidebarService:BrandSidebarService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) {
      this.productFilters = new ProductFilters();
   }

  ngOnInit() {    
    this.getInitialBrandFilter();
  }

  private getInitialBrandFilter() {
    if(!this.initialBrand) {
      this.initialBrand = true;
      this.setUpInitialFilter();   
      this.filterProducts();   
    }        
  }

  private filterProducts() {
    this.brandSidebarService.filterProducts(this.productFilters);
  }

  private setUpInitialFilter() {
    let brand = this.activatedRoute.snapshot.paramMap.get('brand');
    let brandFilter = this.productFilters.brandFilters.brands.filter(brandFilter => brandFilter.name == brand);
    brandFilter[0].checked = true;
    console.log('brandFilter', this.productFilters.brandFilters.brands)
  }
}
