import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardsComponent } from './add-cards.component';

describe('AddCardsComponent', () => {
  let component: AddCardsComponent;
  let fixture: ComponentFixture<AddCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
