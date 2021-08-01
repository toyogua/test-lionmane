import {Component, EventEmitter, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.scss']
})
export class ModalDetailsComponent implements OnInit {
  list: any[] = [];
  rate: any;
  isFavorite: boolean;
  private event: EventEmitter<boolean> = new EventEmitter();

  constructor(public readonly bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
    this.isFavorite = this.list[2];
  }

  handleChange(): void {
    this.isFavorite = !this.isFavorite;
    this.triggerEvent(this.isFavorite);
  }

  triggerEvent(state: boolean): void {
    this.event.emit(state);
  }
}
