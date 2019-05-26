import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppliancesComponent } from './appliances.component';

const routes: Routes = [
  {
    path: '',
    component: AppliancesComponent,
    data: { breadcrumb: 'Appliances'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppliancesRoutingModule { }
