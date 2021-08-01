import {SubbreedsComponent} from '../components/subbreeds/subbreeds.component';
import {BaseView} from '../views/base.view';
import {DogsUseCase} from '../../domain/usecases/DogsUseCase';
import {FilterFavorite} from '../../domain/entity/FilterFavorite';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubBreedsPresenter {
  private view: SubbreedsComponent;
  private baseView: BaseView;
  private listSubBreeds: Array<string> = [];
  private listImages: Array<string> = [];

  get subBreeds(): Array<string> {
    return this.listSubBreeds;
  }

  get images(): Array<string> {
    return this.listImages;
  }

  constructor(private readonly dogsUseCase: DogsUseCase) {
  }

  setView(component: any): void {
    this.view = component as SubbreedsComponent;
    this.baseView = component as BaseView;
  }

  async getListSubBreeds(breed: string): Promise<void> {
    try {
      const result = await this.dogsUseCase.getListSubBreeds(breed);
      this.listSubBreeds = result.message;
    } catch (e) {
      console.log(e);
    }
  }

  async getListImages(filter: FilterFavorite): Promise<void> {
    try {
      const result = await this.dogsUseCase.getListImages(filter);
      this.listImages = result.message;
    } catch (e) {
      console.log(e);
    }
  }
}
