import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Product, Cart } from '../shared/models/data-model';
import { tap, switchMap } from 'rxjs/operators';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private product$;
  private product:Product;
  private currentImage;
  private displayImages;
  private modalImage;
  private isBlack;
  private isWhite;
  private isSteel;
  private selectionColor;
  private displayedColumns: string[]
  private dimensions;
  private details;
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private productService:ProductService,
    private cartService:CartService
  ) { }

  ngOnInit() {
    this.getProductById();
  }

  private addToCart() {
    this.cartService.addToCart(this.product).subscribe();
  }

  private getProductById() {
    this.product$ = this.activatedRoute.paramMap.pipe(
      tap(params => console.log('id', params.get('id'))),
      switchMap((params:ParamMap) => this.productService.getProductById(params.get('id'))));

    this.product$.subscribe((product:Product) => {
      this.setProduct(product);
      this.displayedColumns = ['title', 'value'];
      this.dimensions = this.product.specifications.dimensions;
      this.details = this.product.specifications.details;
    })
  }

  private setProduct(product) {
    this.product = product;
    this.displayImages = product.image;
    this.currentImage = this.displayImages[0];    
  }

  private setImageColor(color:string) {
    switch (color) {
      case 'Black':
        this.displayImages = this.product.images.black;
        this.isBlack = true
        this.isSteel = false;
        this.isWhite = false;
        break;
      case 'Stainless Steel':
        this.displayImages = this.product.images.stainless;
        this.isBlack = false
        this.isSteel = true;
        this.isWhite = false;
        break;
      case 'White':
        this.displayImages = this.product.images.white;
        this.isBlack = false
        this.isSteel = false;
        this.isWhite = true;
        break;
    }

    this.selectionColor = color;
    this.currentImage = this.displayImages[0];
  }

  private setModalImage(image) {
    this.modalImage = image;
  }

  

}
