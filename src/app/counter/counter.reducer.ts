import { createReducer, on } from '@ngrx/store';
import { reset, decrement, increment, multiply, divide } from './counter.actions';

// export function counterReducer(state: number = 100, action: Action): number {
//   switch (action.type) {
//     case increment.type:
//       return state + 1;

//     case decrement.type:
//       return state - 1;

//     default:
//       return state;
//   }
// }

export const initialState = 20;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(multiply, (state, { times }) => state * times),
  on(divide, (state, { divisor }) => state / divisor),
  on(reset, () => initialState)
);
