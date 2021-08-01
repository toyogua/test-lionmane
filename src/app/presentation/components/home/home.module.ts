import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {FormsModule} from '@angular/forms';
import {CardModule} from '../../shared/card/card.module';
import {BreedsModule} from '../../shared/breeds/breeds.module';
import {BsModalService} from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    CardModule,
    BreedsModule
  ],
  providers: [BsModalService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}
