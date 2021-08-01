import {Inject, Injectable} from '@angular/core';
import {DOGS_REPOSITORY, DogsRepository} from '../repository/DogsRepository';
import {FilterFavorite} from '../entity/FilterFavorite';
import {ResponseFavoriteDTO} from '../../data/entity/ResponseFavoriteDTO';
import {ResponseListBreedsDTO} from '../../data/entity/ResponseListBreedsDTO';
import {ResponseListSubBreedsDTO} from '../../data/entity/ResponseListSubBreedsDTO';

@Injectable({
  providedIn: 'root'
})
export class DogsUseCase {
  constructor(
    @Inject(DOGS_REPOSITORY) private readonly dogsRepository: DogsRepository
  ) {
  }

  getFavorite(filter: FilterFavorite): Promise<ResponseFavoriteDTO> {
    return new Promise<ResponseFavoriteDTO>((resolve, reject) => {
      this.dogsRepository
        .getFavorite(filter)
        .subscribe(resolve, reject);
    });
  }

  getDetailFavorite(filter: FilterFavorite): Promise<ResponseFavoriteDTO> {
    return new Promise<ResponseFavoriteDTO>((resolve, reject) => {
      this.dogsRepository
        .getFavoriteDetail(filter)
        .subscribe(resolve, reject);
    });
  }

  getListBreeds(): Promise<ResponseListBreedsDTO> {
    return new Promise<ResponseListBreedsDTO>((resolve, reject) => {
      this.dogsRepository
        .listBreeds()
        .subscribe(resolve, reject);
    });
  }

  getListSubBreeds(breed: string): Promise<ResponseListSubBreedsDTO> {
    return new Promise<ResponseListSubBreedsDTO>((resolve, reject) => {
      this.dogsRepository
        .listSubBreeds(breed)
        .subscribe(resolve, reject);
    });
  }
}
