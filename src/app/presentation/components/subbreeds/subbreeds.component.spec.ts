import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubbreedsComponent } from './subbreeds.component';

describe('SubbreedsComponent', () => {
  let component: SubbreedsComponent;
  let fixture: ComponentFixture<SubbreedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubbreedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubbreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
