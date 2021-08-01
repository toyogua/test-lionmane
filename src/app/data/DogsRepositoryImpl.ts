import {Injectable} from '@angular/core';
import {DogsRepository} from '../domain/repository/DogsRepository';
import {Observable, of} from 'rxjs';
import {ApiService} from './net/ApiService';
import {HttpClient} from '@angular/common/http';
import {FilterFavorite} from '../domain/entity/FilterFavorite';
import {ResponseFavoriteDTO} from './entity/ResponseFavoriteDTO';
import {ResponseListBreedsDTO} from './entity/ResponseListBreedsDTO';
import {ResponseListSubBreedsDTO} from './entity/ResponseListSubBreedsDTO';
import {SaveFavorite} from '../domain/entity/SaveFavorite';

@Injectable()
export class DogsRepositoryImpl implements DogsRepository {
  KEY_FAVORITE = 'favorite';

  constructor(private readonly apiService: ApiService,
              private readonly http: HttpClient) {
  }

  getFavorite(filter: FilterFavorite): Observable<ResponseFavoriteDTO> {
    return this.http.get<ResponseFavoriteDTO>(
      `${this.apiService.REMOTE_END_POINTS.URL_GET_SUB_BREED}/${filter.breed}/${filter.subBreed}/images/random`
    );
  }

  listBreeds(): Observable<ResponseListBreedsDTO> {
    return this.http.get<ResponseListBreedsDTO>(
      `${this.apiService.REMOTE_END_POINTS.URL_GET_LIST_BREEDS}`
    );
  }

  saveFavorite(favorite: SaveFavorite): Observable<boolean> {
    localStorage.setItem('favorite', JSON.stringify(favorite));
    return of(true);
  }

  getFavoriteDetail(filter: FilterFavorite): Observable<ResponseFavoriteDTO> {
    return this.http.get<ResponseFavoriteDTO>(
      `${this.apiService.REMOTE_END_POINTS.URL_GET_SUB_BREED}/${filter.breed}/${filter.subBreed}`
    );
  }

  listSubBreeds(breed: string): Observable<ResponseListSubBreedsDTO> {
    return this.http.get<ResponseListSubBreedsDTO>(
      `${this.apiService.REMOTE_END_POINTS.URL_GET_SUB_BREED}/${breed}/list`
    );
  }

  listImages(filter: FilterFavorite): Observable<ResponseListSubBreedsDTO> {
    return this.http.get<ResponseListSubBreedsDTO>(
      `${this.apiService.REMOTE_END_POINTS.URL_GET_SUB_BREED}/${filter.breed}/${filter.subBreed}/images/random/${filter.size}`
    );
  }

  existsFavorite(): Observable<SaveFavorite> {
    const obj = localStorage.getItem(this.KEY_FAVORITE);
    return of(JSON.parse(obj));
  }

  removeFavorite(): Observable<boolean> {
    localStorage.removeItem(this.KEY_FAVORITE);
    return of(true);
  }
}
