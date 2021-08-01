import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {ModalDetailsComponent} from './modal-details.component';
import {CommonModule} from '@angular/common';
import {RatingModule} from 'ngx-bootstrap/rating';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ModalDetailsComponent],
  imports: [CommonModule, RatingModule.forRoot(), FormsModule],
  exports: [ModalDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalDetailsModule {
}
