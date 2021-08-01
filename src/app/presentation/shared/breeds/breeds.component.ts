import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent implements OnInit {
  @Input()
  items!: any[];
  @Input()
  isOpen: boolean;
  @Output()
  selected = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  handleSelect(event: string): void {
    this.selected.emit(event);
  }
}
