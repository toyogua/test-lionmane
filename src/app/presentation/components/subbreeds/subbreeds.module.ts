import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SubbreedsRoutingModule} from './subbreeds-routing.module';
import {SubbreedsComponent} from './subbreeds.component';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ModalDetailsModule} from '../../shared/modal-details/modal-details.module';
import {ModalFavoriteModule} from '../../shared/modal-favorite/modal-favorite.module';


@NgModule({
  declarations: [
    SubbreedsComponent
  ],
  imports: [
    CommonModule,
    SubbreedsRoutingModule,
    ModalDetailsModule,
    ModalFavoriteModule
  ],
  providers: [BsModalService]
})
export class SubbreedsModule {
}
