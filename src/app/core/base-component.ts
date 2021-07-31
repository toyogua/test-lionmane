import {OnInit} from '@angular/core';
import {BaseView} from '../presentation/views/base.view';

export abstract class BaseComponentWeb implements OnInit, BaseView {
  public modalVisible = false;

  loading = false;

  ngOnInit(): void {
  }

  openModal(): void {
    this.modalVisible = true;
  }

  closeModal(): void {
    this.modalVisible = false;
  }

  showLoading(): void {
    this.loading = true;
  }

  hideLoading(): void {
    this.loading = false;
  }
}
