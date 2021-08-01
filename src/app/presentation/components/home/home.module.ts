import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { RatingModule } from 'ngx-bootstrap/rating';
import {FormsModule} from '@angular/forms';
import {CardModule} from '../../shared/card/card.module';
import {BreedsModule} from '../../shared/breeds/breeds.module';
@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        RatingModule.forRoot(),
        FormsModule,
        CardModule,
        BreedsModule
    ]
})
export class HomeModule { }
