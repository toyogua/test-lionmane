import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFavoriteComponent } from './modal-favorite.component';

describe('ModalFavoriteComponent', () => {
  let component: ModalFavoriteComponent;
  let fixture: ComponentFixture<ModalFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFavoriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
