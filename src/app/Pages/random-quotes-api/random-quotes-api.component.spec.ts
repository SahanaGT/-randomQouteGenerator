import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomQuotesApiComponent } from './random-quotes-api.component';

describe('RandomQuotesApiComponent', () => {
  let component: RandomQuotesApiComponent;
  let fixture: ComponentFixture<RandomQuotesApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomQuotesApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomQuotesApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
