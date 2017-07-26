import { Observable } from 'rxjs'
import { ActionsObservable } from 'redux-observable'

import * as TYPES from './main.types';
// import { todoWasAdded } from './main.actions';

export function addTodoEpic(action$: ActionsObservable<IAction>): Observable<IAction> {
  return action$
    .ofType(TYPES.ADD_TODO)
    .mapTo(null);
}
