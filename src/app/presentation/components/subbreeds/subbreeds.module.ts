import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubbreedsRoutingModule } from './subbreeds-routing.module';
import { SubbreedsComponent } from './subbreeds.component';
import {BsModalService} from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    SubbreedsComponent
  ],
  imports: [
    CommonModule,
    SubbreedsRoutingModule
  ],
  providers: [BsModalService]
})
export class SubbreedsModule { }
