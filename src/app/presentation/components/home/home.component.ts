import {Component, OnInit} from '@angular/core';
import {HomePresenter} from '../../presenters/home.presenter';
import {FilterFavorite} from '../../../domain/entity/FilterFavorite';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rate: any;
  isReadonly: any;

  constructor(public readonly homePresenter: HomePresenter) {
  }

  async ngOnInit(): Promise<void> {
    this.setPresenter();
    await this.init();
  }

  setPresenter(): void {
    this.homePresenter.setView(this);
  }

  async init(): Promise<void> {
    const filter: FilterFavorite = {
      breed: 'hound',
      subBreed: 'afghan'
    };
    await this.homePresenter.getFavorite(filter);
    await this.homePresenter.getDetailFavorite(filter);
    await this.homePresenter.getListBreeds();
  }

  async changeBreed(event: string): Promise<void> {
    await this.homePresenter.getListSubBreeds(event);
  }
}
