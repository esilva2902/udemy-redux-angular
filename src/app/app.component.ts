import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import { decrement, increment } from './counter/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  counter: number;

  constructor(private store: Store<AppState>) {
    this.counter = 0;
  }

  ngOnInit(): void {
    // Listening changes in all state:
    this.store.subscribe({
      next: state => {
        console.log(state);
        this.counter = state.counter;
      }
    });

    // Listening changes only in specific node, in this case counter:
    this.store.select(state => state.counter)
      .subscribe({
        next: counter => console.log(counter)
      });

  }

  onIncrement(): void {
    this.store.dispatch(increment());
  }

  onDecrement(): void {
    this.store.dispatch(decrement());
  }
}
