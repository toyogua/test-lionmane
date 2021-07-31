import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';

export interface DogsRepository {
  getFavorite: (breed: string) => Observable<unknown>;
  listBreeds: () => Observable<unknown[]>;
  saveFavorite: () => Observable<unknown>;
}
export const DOGS_REPOSITORY = new InjectionToken('DogsRepository');
