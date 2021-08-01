import {NgModule} from '@angular/core';
import {BreedsComponent} from './breeds.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [BreedsComponent],
  imports: [
    NgSelectModule,
    FormsModule,
    CommonModule
  ],
  exports: [BreedsComponent]
})

export class BreedsModule {}
