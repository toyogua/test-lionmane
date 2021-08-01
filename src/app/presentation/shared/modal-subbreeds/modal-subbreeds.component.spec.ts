import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSubbreedsComponent } from './modal-subbreeds.component';

describe('ModalSubbreedsComponent', () => {
  let component: ModalSubbreedsComponent;
  let fixture: ComponentFixture<ModalSubbreedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSubbreedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSubbreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
