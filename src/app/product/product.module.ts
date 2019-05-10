import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/modules/shared/shared.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    NgbModule, 
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
