import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubbreedsRoutingModule } from './subbreeds-routing.module';
import { SubbreedsComponent } from './subbreeds.component';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ModalDetailsModule} from '../../shared/modal-details/modal-details.module';


@NgModule({
  declarations: [
    SubbreedsComponent
  ],
  imports: [
    CommonModule,
    SubbreedsRoutingModule,
    ModalDetailsModule
  ],
  providers: [BsModalService]
})
export class SubbreedsModule { }
