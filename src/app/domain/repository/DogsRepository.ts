import {Observable} from 'rxjs';
import {InjectionToken} from '@angular/core';
import {FilterFavorite} from '../entity/FilterFavorite';
import {ResponseFavoriteDTO} from '../../data/entity/ResponseFavoriteDTO';
import {ResponseListBreedsDTO} from '../../data/entity/ResponseListBreedsDTO';
import {ResponseListSubBreedsDTO} from '../../data/entity/ResponseListSubBreedsDTO';
import {SaveFavorite} from '../entity/SaveFavorite';

export interface DogsRepository {
  getFavorite: (filter: FilterFavorite) => Observable<ResponseFavoriteDTO>;
  listBreeds: () => Observable<ResponseListBreedsDTO>;
  saveFavorite: (favorite: SaveFavorite) => Observable<boolean>;
  getFavoriteDetail: (filter: FilterFavorite) => Observable<ResponseFavoriteDTO>;
  listSubBreeds: (breed: string) => Observable<ResponseListSubBreedsDTO>;
  listImages: (filter: FilterFavorite) => Observable<ResponseListSubBreedsDTO>;
  existsFavorite: () => Observable<SaveFavorite>;
  removeFavorite: () => Observable<boolean>;
}

export const DOGS_REPOSITORY = new InjectionToken('DogsRepository');
