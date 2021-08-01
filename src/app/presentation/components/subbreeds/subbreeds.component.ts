import {Component, OnInit} from '@angular/core';
import {HomePresenter} from '../../presenters/home.presenter';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal';
import {ModalDetailsComponent} from '../../shared/modal-details/modal-details.component';
import {FilterFavorite} from '../../../domain/entity/FilterFavorite';
import {Router} from '@angular/router';
import {SubBreedsPresenter} from '../../presenters/sub-breeds.presenter';
import {SaveFavorite} from '../../../domain/entity/SaveFavorite';
import {ModalFavoriteComponent} from '../../shared/modal-favorite/modal-favorite.component';

@Component({
  selector: 'app-subbreeds',
  templateUrl: './subbreeds.component.html',
  styleUrls: ['./subbreeds.component.scss']
})
export class SubbreedsComponent implements OnInit {
  private bsModalRef: BsModalRef;
  private bsModalRefFavorite: BsModalRef;
  private existsFavorite: boolean;
  private dogSelect: FilterFavorite;

  constructor(public readonly homePresenter: HomePresenter,
              public readonly subBreedsPresenter: SubBreedsPresenter,
              private readonly bsModalService: BsModalService,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.setPresenter();
    this.validateExistsFavorite();
  }

  async validateExistsFavorite(): Promise<void> {
    await this.subBreedsPresenter.existsFavorite().then((exits) => {
      this.existsFavorite = exits;
    });
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
    this.dogSelect = filter;
    this.validateExistsFavorite();
    this.openModal(filter);
  }

  async openModal(filter: FilterFavorite): Promise<void> {
    await this.subBreedsPresenter.getListImages(filter);
    await this.homePresenter.getDetailFavorite(filter);
    const initialState = {
      list: [
        this.subBreedsPresenter.images,
        this.homePresenter.favoriteDTO.details,
        (this.existsFavorite ? this.subBreedsPresenter.favoriteSaved.breed === this.dogSelect.breed
          && this.subBreedsPresenter.favoriteSaved.subbreed === this.dogSelect.subBreed : false)
      ]
    };
    const options: ModalOptions = {
      initialState
    };
    this.bsModalRef = this.bsModalService.show(ModalDetailsComponent, options);
    this.bsModalRef.content.event.subscribe(
      (res) => {
        if (res) {
          if (this.existsFavorite) {
            this.bsModalRefFavorite = this.bsModalService.show(ModalFavoriteComponent);
            this.bsModalRefFavorite.content.event.subscribe((press) => {
              if (press) {
                this.saveFavorite(filter);
              }
            });
          } else {
            this.saveFavorite(filter);
          }
        } else {
          this.subBreedsPresenter.removeFavorite();
        }
      }
    );
  }

  async saveFavorite(filter: FilterFavorite): Promise<void> {
    const favorite: SaveFavorite = {
      breed: filter.breed,
      subbreed: filter.subBreed
    };
    await this.subBreedsPresenter.saveFavorite(favorite);
  }

  goHome(): void {
    this.router.navigate(['home']);
  }
}
