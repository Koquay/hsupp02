import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BrandRoutingModule } from './brand-routing.module';
import { BrandComponent } from './brand.component';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { BrandSidebarComponent } from './brand-sidebar/brand-sidebar.component';

@NgModule({
  declarations: [BrandComponent, BrandSidebarComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,   
    NgbModule, 
    BrandRoutingModule,
    SharedModule,

  ]
})
export class BrandModule { }
