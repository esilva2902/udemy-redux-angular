import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { reset } from '../counter.actions';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss']
})
export class GrandchildComponent implements OnInit {

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

  reset(): void {
    this.store.dispatch(reset());
  }

}
