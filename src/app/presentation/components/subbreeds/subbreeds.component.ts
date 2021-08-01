import {Component, OnInit} from '@angular/core';
import {HomePresenter} from '../../presenters/home.presenter';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ModalDetailsComponent} from '../../shared/modal-details/modal-details.component';

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

  handleClick(e: any): void {
    e.preventDefault();
    this.openModal();
  }

  openModal(): void {
    this.bsModalService.show(ModalDetailsComponent);
  }
}
