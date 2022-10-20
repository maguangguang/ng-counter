import {Component, OnInit} from '@angular/core';

export const WHITE_BACKGROUND = "white";
export const GREEN_BACKGROUND = "green";

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
    if (this.num >= 0) {
      this.minusButtonVisible = true;
    }
    if (this.num > 10) {
      this.plusButtonVisible = false;
    }
  }

  onMinusClick(): void {
    this.num -= 1;
    if (this.num < 0) {
      this.minusButtonVisible = false;
      this.textBackgroundColor = GREEN_BACKGROUND;
    }
    if (this.num <= 10) {
      this.plusButtonVisible = true;
    }
  }
}
