import {Injectable} from '@angular/core';
import {HomeComponent} from '../components/home/home.component';
import {BaseView} from '../views/base.view';
import {DogsUseCase} from '../../domain/usecases/DogsUseCase';

@Injectable({
  providedIn: 'root'
})

export class HomePresenter {
  private view: HomeComponent | undefined;
  private baseView: BaseView | undefined;
  public title = 'Home Presenter';

  constructor(private readonly dogsUseCase: DogsUseCase) {
  }

  setView(component: any): void {
    this.view = component as HomeComponent;
    this.baseView = component as BaseView;
  }

  async getFavorite(breed: string): Promise<void> {
    const result = await this.dogsUseCase.getFavorite(breed);
  }
}
