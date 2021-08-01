import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubbreedsRoutingModule } from './subbreeds-routing.module';
import { SubbreedsComponent } from './subbreeds.component';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ModalDetailsModule} from '../../shared/modal-details/modal-details.module';
import {RatingModule} from 'ngx-bootstrap/rating';


@NgModule({
  declarations: [
    SubbreedsComponent
  ],
  imports: [
    CommonModule,
    SubbreedsRoutingModule,
    ModalDetailsModule,
    RatingModule.forRoot(),
  ],
  providers: [BsModalService]
})
export class SubbreedsModule { }
