import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DOGS_REPOSITORY} from '../../domain/repository/DogsRepository';
import {DogsRepositoryImpl} from '../../data/DogsRepositoryImpl';

@NgModule({
  providers: [{
    provide: DOGS_REPOSITORY, useClass: DogsRepositoryImpl
  }],
  imports: [CommonModule]
})

export class InjectorModule {
}
