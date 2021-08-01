import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-subbreeds',
  templateUrl: './modal-subbreeds.component.html',
  styleUrls: ['./modal-subbreeds.component.scss']
})
export class ModalSubbreedsComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.bsModalRef.hide();
    this.bsModalRef.onHidden.emit(true);
  }
}
