import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.scss']
})
export class ModalDetailsComponent implements OnInit {
  list: any[] = [];
  constructor(public readonly bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
    console.log(this.list)
  }

}
