import {Component, OnInit} from '@angular/core';
import {HomePresenter} from '../../presenters/home.presenter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rate: any;
  isReadonly: any;

  constructor(public readonly homePresenter: HomePresenter) {
  }

  ngOnInit(): void {
    this.setPresenter();
  }

  setPresenter(): void {
    this.homePresenter.setView(this);
  }
}
