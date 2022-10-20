import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CounterComponent} from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add number by 1 when click button +', () => {
    component.num = 0;
    component.onPlusClick();
    expect(component.num).toEqual(1);
  });

  it('should decrease number by 1 when click button +', () => {
    component.num = 0;
    component.onMinusClick();
    expect(component.num).toEqual(-1);
  });
});
