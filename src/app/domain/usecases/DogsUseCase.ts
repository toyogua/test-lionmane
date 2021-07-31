import {Inject, Injectable} from '@angular/core';
import {DOGS_REPOSITORY, DogsRepository} from '../repository/DogsRepository';

@Injectable({
  providedIn: 'root'
})
export class DogsUseCase {
  constructor(
    @Inject(DOGS_REPOSITORY) private readonly dogsRepository: DogsRepository
  ) {
  }

  getFavorite(breed: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dogsRepository
        .getFavorite(breed)
        .subscribe(resolve, reject);
    });
  }
}
