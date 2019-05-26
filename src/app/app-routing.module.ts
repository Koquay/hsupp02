import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  
  {
    path: 'home',
    component: HomeComponent,
    data: { breadcrumb: 'Home'}
  },
  {
    path: 'appliances',
    loadChildren: './appliances/appliances.module#AppliancesModule',
    data: { breadcrumb: 'Appliances'}
  },
  {
    path: 'brand',
    loadChildren: './brand/brand.module#BrandModule'
  },
  {
    path: 'product',
    loadChildren: './product/product.module#ProductModule'
  },
  {
    path: 'cart',
    loadChildren: './cart/cart.module#CartModule'
  },
  {
    path: 'checkout',
    loadChildren: './checkout/checkout.module#CheckoutModule'
  },
  {
    path: '', pathMatch: 'prefix', redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
