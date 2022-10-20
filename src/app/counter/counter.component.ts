import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  num = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.num++;
  }
}
