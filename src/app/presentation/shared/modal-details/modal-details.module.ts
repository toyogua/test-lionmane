import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ModalDetailsComponent} from './modal-details.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ModalDetailsComponent],
  imports: [CommonModule],
  exports: [ModalDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalDetailsModule {
}
