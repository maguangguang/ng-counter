import {Component, OnInit} from '@angular/core';

export const WHITE_BACKGROUND = "white";
export const GREEN_BACKGROUND = "green";
export const RED_BACKGROUND = "red";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  num = 0;
  minusButtonVisible = true;
  plusButtonVisible = true;
  textBackgroundColor = WHITE_BACKGROUND;

  constructor() {
  }

  ngOnInit(): void {
  }

  onPlusClick(): void {
    this.num += 1;
    this.updateDisplayElements();
  }

  onMinusClick(): void {
    this.num -= 1;
    this.updateDisplayElements();
  }

  onResetClick(): void {
    this.num = 0;
    this.updateDisplayElements();
  }

  private updateDisplayElements() {
    this.updateMinusButtonVisible();
    this.updatePlusButtonVisible();
    this.updateTextBackgroundColor();
  }

  private updateMinusButtonVisible() {
    this.minusButtonVisible = this.num >= 0;
  }

  private updateTextBackgroundColor() {
    if (this.num < 0) {
      this.textBackgroundColor = GREEN_BACKGROUND;
    } else if (this.num > 10) {
      this.textBackgroundColor = RED_BACKGROUND;
    } else {
      this.textBackgroundColor = WHITE_BACKGROUND;
    }
  }

  private updatePlusButtonVisible() {
    this.plusButtonVisible = this.num <= 10;
  }
}
