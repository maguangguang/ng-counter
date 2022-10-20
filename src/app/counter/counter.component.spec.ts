import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CounterComponent, GREEN_BACKGROUND, RED_BACKGROUND, WHITE_BACKGROUND} from './counter.component';

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

  it('should hide + button when number is larger than 10', () => {
    component.num = 10;
    component.plusButtonVisible = true;
    component.onPlusClick();
    expect(component.num).toEqual(11);
    expect(component.plusButtonVisible).toBeFalse();
  });

  it('should show + button when number is equal or less than 10', () => {
    component.num = 11;
    component.plusButtonVisible = false;
    component.onMinusClick();
    expect(component.num).toEqual(10);
    expect(component.plusButtonVisible).toBeTrue();
  });

  it('should change text background to green when number less than 0', () => {
    component.num = 0;
    component.minusButtonVisible = true;
    component.onMinusClick();
    expect(component.num).toEqual(-1);
    expect(component.textBackgroundColor).toEqual(GREEN_BACKGROUND);
  });

  it('should change text background to red when number is larger than 10', () => {
    component.num = 10;
    component.plusButtonVisible = true;
    component.onPlusClick();
    expect(component.num).toEqual(11);
    expect(component.textBackgroundColor).toEqual(RED_BACKGROUND);
  });

  it('should change text background to white when number is equal or less than 10', () => {
    component.num = 11;
    component.onMinusClick();
    expect(component.num).toEqual(10);
    expect(component.textBackgroundColor).toEqual(WHITE_BACKGROUND);
  });

  it('should change text background to white when number is equal or larger than 0', () => {
    component.num = -1;
    component.onPlusClick();
    expect(component.num).toEqual(0);
    expect(component.textBackgroundColor).toEqual(WHITE_BACKGROUND);
  });

  it('should reset number to 0 when reset button clicked', () => {
    component.num = -1;
    component.onResetClick();
    expect(component.num).toEqual(0);
    expect(component.textBackgroundColor).toEqual(WHITE_BACKGROUND);
    expect(component.plusButtonVisible).toBeTrue();
    expect(component.minusButtonVisible).toBeTrue();
  });
});
