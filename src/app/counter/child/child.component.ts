import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/app.reducers';
import { divide, multiply } from '../counter.actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  counter: number;

  constructor(private store: Store<AppState>) {
    this.counter = 0;
  }

  ngOnInit(): void {
    this.store.select(state => state.counter)
      .subscribe({
        next: counter => this.counter = counter
      });
  }

  onMultiply(): void {
    this.store.dispatch(multiply({ times: 2 }));
  }

  onDivide(): void {
    this.store.dispatch(divide({ divisor: 2 }));
  }
}
