import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomQuotesLocalComponent } from './random-quotes-local.component';

describe('RandomQuotesLocalComponent', () => {
  let component: RandomQuotesLocalComponent;
  let fixture: ComponentFixture<RandomQuotesLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomQuotesLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomQuotesLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
