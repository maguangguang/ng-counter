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

  it('should hide - button when number is less than 0', () => {
    component.num = 0;
    component.minusButtonVisible = true;
    component.onMinusClick();
    expect(component.num).toEqual(-1);
    expect(component.minusButtonVisible).toBeFalse();
  });

  it('should show - button when number is equal or larger than 0', () => {
    component.num = -1;
    component.minusButtonVisible = false;
    component.onPlusClick();
    expect(component.num).toEqual(0);
    expect(component.minusButtonVisible).toBeTrue();
  });
});
