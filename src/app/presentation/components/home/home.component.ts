import {Component, OnInit} from '@angular/core';
import {HomePresenter} from '../../presenters/home.presenter';
import {FilterFavorite} from '../../../domain/entity/FilterFavorite';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal';
import {ModalSubbreedsComponent} from '../../shared/modal-subbreeds/modal-subbreeds.component';
import {Router} from '@angular/router';
import {SubBreedsPresenter} from '../../presenters/sub-breeds.presenter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bsModalRef: BsModalRef;
  isOpen: boolean;
  existsFavorite: boolean;
  constructor(public readonly homePresenter: HomePresenter,
              public readonly subBreedsPresenter: SubBreedsPresenter,
              private readonly bsModalService: BsModalService,
              private readonly router: Router) {
  }

  async ngOnInit(): Promise<void> {
    this.setPresenter();
    await this.init();
  }

  setPresenter(): void {
    this.homePresenter.setView(this);
    this.subBreedsPresenter.setView(this);
  }

  async init(): Promise<void> {
    this.isOpen = true;
    await this.subBreedsPresenter.existsFavorite().then((exists) => {
      if (exists) {
        this.existsFavorite = true;
        const filter: FilterFavorite = {
          breed: this.subBreedsPresenter.favoriteSaved.breed,
          subBreed: this.subBreedsPresenter.favoriteSaved.subbreed
        };
        this.homePresenter.getFavorite(filter);
        this.homePresenter.getDetailFavorite(filter);
      } else {
        const filter: FilterFavorite = {
          breed: 'hound',
          subBreed: 'afghan'
        };
        this.homePresenter.getFavorite(filter);
        this.homePresenter.getDetailFavorite(filter);
      }
    });
    await this.homePresenter.getListBreeds();
  }

  async changeBreed(event: string): Promise<void> {
    if (typeof event === 'string') {
      this.homePresenter.breedSelected = event;
      await this.subBreedsPresenter.getListSubBreeds(event);
      if (this.subBreedsPresenter.subBreeds.length > 0) {
        await this.router.navigate(['subbreeds']);
      } else {
        this.openModal();
      }
    }
  }

  openModal(): void {
    this.isOpen = false;
    this.bsModalRef = this.bsModalService.show(ModalSubbreedsComponent);
    this.bsModalRef.onHidden.subscribe((res) => this.isOpen = true);
  }
}
