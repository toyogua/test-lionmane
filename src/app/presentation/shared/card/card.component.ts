import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  image!: string | undefined;
  @Input()
  details!: string | undefined;
  @Input()
  isFavorite: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
