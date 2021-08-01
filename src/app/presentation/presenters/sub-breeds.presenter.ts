import {SubbreedsComponent} from '../components/subbreeds/subbreeds.component';
import {BaseView} from '../views/base.view';
import {DogsUseCase} from '../../domain/usecases/DogsUseCase';
import {FilterFavorite} from '../../domain/entity/FilterFavorite';
import {Injectable} from '@angular/core';
import {SaveFavorite} from '../../domain/entity/SaveFavorite';
import {compareSegments} from '@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker';

@Injectable({
  providedIn: 'root'
})
export class SubBreedsPresenter {
  private view: SubbreedsComponent;
  private baseView: BaseView;
  private listSubBreeds: Array<string> = [];
  private listImages: Array<string> = [];
  public favoriteSaved: SaveFavorite;

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

  async saveFavorite(favorite: SaveFavorite): Promise<void> {
    try {
      const result = await this.dogsUseCase.saveFavorite(favorite);
    } catch (e) {
      console.log(e);
    }
  }

  async existsFavorite(): Promise<boolean> {
    try {
      const favorite = await this.dogsUseCase.existsFavorite();
      if (favorite) {
        this.favoriteSaved = favorite;
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
      console.log(e);
    }
  }

  async removeFavorite(): Promise<void> {
    try {
      const result = await this.dogsUseCase.removeFavorite();
    } catch (e) {
      console.log(e);
    }
  }
}
