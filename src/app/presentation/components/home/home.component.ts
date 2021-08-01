import {Component, OnInit} from '@angular/core';
import {HomePresenter} from '../../presenters/home.presenter';
import {FilterFavorite} from '../../../domain/entity/FilterFavorite';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal';
import {ModalSubbreedsComponent} from '../../shared/modal-subbreeds/modal-subbreeds.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rate: any;
  isReadonly: any;
  bsModalRef: BsModalRef;
  isOpen: boolean;

  constructor(public readonly homePresenter: HomePresenter,
              private readonly bsModalService: BsModalService,
              private readonly router: Router) {
  }

  async ngOnInit(): Promise<void> {
    this.setPresenter();
    await this.init();
  }

  setPresenter(): void {
    this.homePresenter.setView(this);
  }

  async init(): Promise<void> {
    this.isOpen = true;
    const filter: FilterFavorite = {
      breed: 'hound',
      subBreed: 'afghan'
    };
    await this.homePresenter.getFavorite(filter);
    await this.homePresenter.getDetailFavorite(filter);
    await this.homePresenter.getListBreeds();
  }

  async changeBreed(event: string): Promise<void> {
    if (typeof event === 'string') {
      await this.homePresenter.getListSubBreeds(event);
      if (this.homePresenter.subBreeds.length > 0) {
        await this.router.navigate(['details']);
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
