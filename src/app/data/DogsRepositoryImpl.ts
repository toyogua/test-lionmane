import {Injectable} from '@angular/core';
import {DogsRepository} from '../domain/repository/DogsRepository';
import {Observable, of} from 'rxjs';
import {ApiService} from './net/ApiService';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DogsRepositoryImpl implements DogsRepository {
  constructor(private readonly apiService: ApiService,
              private readonly http: HttpClient) {
  }

  getFavorite(breed: string): Observable<unknown> {
    return this.http.get<unknown>(
      this.apiService.REMOTE_END_POINTS.URL_GET_SUB_BREED
    );
  }

  listBreeds(): Observable<unknown[]> {
    return of();
  }

  saveFavorite(): Observable<unknown> {
    return of();
  }
}
