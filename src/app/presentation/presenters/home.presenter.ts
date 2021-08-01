import {Injectable} from '@angular/core';
import {HomeComponent} from '../components/home/home.component';
import {BaseView} from '../views/base.view';
import {DogsUseCase} from '../../domain/usecases/DogsUseCase';
import {FilterFavorite} from '../../domain/entity/FilterFavorite';
import {ResponseFavoriteDTO} from '../../data/entity/ResponseFavoriteDTO';
import {FavoriteDTO} from '../../data/entity/FavoriteDTO';
import {BreedDTO} from '../../data/entity/BreedDTO';

@Injectable({
  providedIn: 'root'
})

export class HomePresenter {
  private view: HomeComponent | undefined;
  private baseView: BaseView | undefined;
  public title = 'Home Presenter';
  public favoriteDTO: FavoriteDTO = {};
  public loadCard = false;
  public listBreeds: BreedDTO[] = [];

  constructor(private readonly dogsUseCase: DogsUseCase) {
  }

  get favorite(): FavoriteDTO {
    return this.favoriteDTO;
  }

  get breeds(): BreedDTO[] {
    return this.listBreeds;
  }

  setView(component: any): void {
    this.view = component as HomeComponent;
    this.baseView = component as BaseView;
  }

  async getFavorite(filter: FilterFavorite): Promise<void> {
    try {
      const result = await this.dogsUseCase.getFavorite(filter);
      if (typeof result.message === 'string') {
        this.favoriteDTO.image = result.message;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getDetailFavorite(filter: FilterFavorite): Promise<void> {
    try {
      const result = await this.dogsUseCase.getDetailFavorite(filter);
      if (typeof result.message === 'string') {
        this.favoriteDTO.details = result.message;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getListBreeds(): Promise<void> {
    try {
      const result = await this.dogsUseCase.getListBreeds();
      if (result) {
        this.mappingBreeds(result);
      }
    } catch (e) {
      console.log(e);
    }
  }

  mappingBreeds(breeds: any): void {
    const keys = Object.entries(breeds);
    const names: any = keys[0][1];
    Object.keys(names).forEach((key) => {
      const breed: BreedDTO = {
        name: key,
        id: key
      };
      this.listBreeds.push(breed);
    });
  }

  async getListSubBreeds(breed: string): Promise<void> {
    try {
      const result = await this.dogsUseCase.getListSubBreeds(breed);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }
}
