import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppliancesRoutingModule } from './appliances-routing.module';
import { AppliancesComponent } from './appliances.component';
import {SharedModule} from '../shared/modules/shared/shared.module';
import { AppliancesSidebarComponent } from './appliances-sidebar/appliances-sidebar.component';

@NgModule({
  declarations: [AppliancesComponent, AppliancesSidebarComponent],
  imports: [
    CommonModule,
    AppliancesRoutingModule,
    SharedModule
  ]
})
export class AppliancesModule { }
