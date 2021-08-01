import {Component, OnInit} from '@angular/core';
import {HomePresenter} from '../../presenters/home.presenter';
import {BsModalService, ModalOptions} from 'ngx-bootstrap/modal';
import {ModalDetailsComponent} from '../../shared/modal-details/modal-details.component';
import {FilterFavorite} from '../../../domain/entity/FilterFavorite';
import {Router} from '@angular/router';
import {SubBreedsPresenter} from '../../presenters/sub-breeds.presenter';

@Component({
  selector: 'app-subbreeds',
  templateUrl: './subbreeds.component.html',
  styleUrls: ['./subbreeds.component.scss']
})
export class SubbreedsComponent implements OnInit {

  constructor(public readonly homePresenter: HomePresenter,
              public readonly subBreedsPresenter: SubBreedsPresenter,
              private readonly bsModalService: BsModalService,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.setPresenter();
  }

  setPresenter(): void {
    this.homePresenter.setView(this);
    this.subBreedsPresenter.setView(this);
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
    await this.subBreedsPresenter.getListImages(filter);
    await this.homePresenter.getDetailFavorite(filter);
    const initialState = {
      list: [
        this.subBreedsPresenter.images,
        this.homePresenter.favoriteDTO.details
      ]
    };
    const options: ModalOptions = {
      initialState
    };
    this.bsModalService.show(ModalDetailsComponent, options);
  }

  goHome(): void {
    this.router.navigate(['home']);
  }
}
