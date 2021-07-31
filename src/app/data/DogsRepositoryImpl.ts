import {Injectable} from '@angular/core';
import {DogsRepository} from '../domain/repository/DogsRepository';
import {Observable, of} from 'rxjs';

@Injectable()
export class DogsRepositoryImpl implements DogsRepository {
  getFavorite(breed: string): Observable<unknown> {
    return of();
  }

  listBreeds(): Observable<unknown[]> {
    return of();
  }

  saveFavorite(): Observable<unknown> {
    return of();
  }
}
