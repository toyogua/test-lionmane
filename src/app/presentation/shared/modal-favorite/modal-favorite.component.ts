import {Component, EventEmitter, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-favorite',
  templateUrl: './modal-favorite.component.html',
  styleUrls: ['./modal-favorite.component.scss']
})
export class ModalFavoriteComponent implements OnInit {
  private event: EventEmitter<boolean> = new EventEmitter();

  constructor(public readonly bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  handleClick(e: boolean): void {
    this.triggerEvent(e);
    this.bsModalRef.hide();
  }

  triggerEvent(state: boolean): void {
    this.event.emit(state);
  }
}
