import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { AuthenticationGuard } from 'src/app/authentication/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    data: { breadcrumb: 'Cart'},
    // canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
