import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() counter: number;
  @Output() counterChange: EventEmitter<number>;

  constructor() {
    this.counter = 0;
    this.counterChange = new EventEmitter<number>();
  }

  onMultiply(): void {
    this.counterChange.emit(this.counter *= 2);
  }

  onDivide(): void {
    this.counterChange.emit(this.counter /= 2);
  }

  onGrandChildCounterChange(newCounter: number): void {
    this.counter = newCounter;
    this.counterChange.emit(newCounter);
  }
}
