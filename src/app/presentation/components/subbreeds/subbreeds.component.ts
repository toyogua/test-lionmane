import {Component, OnInit} from '@angular/core';
import {HomePresenter} from '../../presenters/home.presenter';
import {BsModalService, ModalOptions} from 'ngx-bootstrap/modal';
import {ModalDetailsComponent} from '../../shared/modal-details/modal-details.component';
import {FilterFavorite} from '../../../domain/entity/FilterFavorite';

@Component({
  selector: 'app-subbreeds',
  templateUrl: './subbreeds.component.html',
  styleUrls: ['./subbreeds.component.scss']
})
export class SubbreedsComponent implements OnInit {

  constructor(public readonly homePresenter: HomePresenter,
              private readonly bsModalService: BsModalService) {
  }

  ngOnInit(): void {
    this.setPresenter();
  }

  setPresenter(): void {
    this.homePresenter.setView(this);
  }

  handleClick(e: any, item: string): void {
    e.preventDefault();
    const filter: FilterFavorite = {
      breed: this.homePresenter.breedSelected,
      subBreed: item,
      size: 5
    };
    this.openModal(filter);
  }

  async openModal(filter: FilterFavorite): Promise<void> {
    await this.homePresenter.getListImages(filter);
    const initialState = {
      list: [
        this.homePresenter.images
      ]
    };
    const options: ModalOptions = {
      initialState
    };
    this.bsModalService.show(ModalDetailsComponent, options);
  }
}
