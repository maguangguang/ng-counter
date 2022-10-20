import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  num = 0;
  minusButtonVisible = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  onPlusClick(): void {
    this.num += 1;
    if (this.num >= 0) {
      this.minusButtonVisible = true;
    }
  }

  onMinusClick(): void {
    this.num -= 1;
    if (this.num < 0) {
      this.minusButtonVisible = false;
    }
  }
}
