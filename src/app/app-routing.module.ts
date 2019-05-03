import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'appliances',
    loadChildren: './appliances/appliances.module#AppliancesModule'
  },
  {
    path: 'brand',
    loadChildren: './brand/brand.module#BrandModule'
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
