import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ModalSubbreedsComponent} from './modal-subbreeds.component';
import {CommonModule} from '@angular/common';
import {BreedsModule} from '../breeds/breeds.module';

@NgModule({
  declarations: [ModalSubbreedsComponent],
  imports: [CommonModule, BreedsModule],
  exports: [ModalSubbreedsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalModule {}
