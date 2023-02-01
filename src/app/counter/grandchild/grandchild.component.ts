import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss']
})
export class GrandchildComponent {

  @Input() counter: number;
  @Output() counterChange: EventEmitter<number>;

  constructor() {
    this.counter = 0;
    this.counterChange = new EventEmitter<number>();
  }

  reset(): void {
    this.counter = 0;
    this.counterChange.emit(this.counter);
  }

}
