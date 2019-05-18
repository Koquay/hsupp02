import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from '../../../header/header.component';
import { FooterComponent } from '../../../footer/footer.component';
import { PercentSavedPipe } from '../../pipes/percent-saved.pipe';
import { PaginationComponent } from '../../pagination/pagination.component';
import { ConcatCityStatePipe } from '../../pipes/concat-city-state.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PercentSavedPipe,
    PaginationComponent,
    ConcatCityStatePipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PercentSavedPipe,
    PaginationComponent,
    ConcatCityStatePipe
  ]
})
export class SharedModule { }
