import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const multiply = createAction('[Counter] Multiply', props<{ times: number; }>());
export const divide = createAction('[Counter] Divide', props<{ divisor: number; }>());
export const reset = createAction('[Counter Component] Reset');
