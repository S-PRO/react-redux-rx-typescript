import { Todo } from './main.model';
import * as TYPES from './main.types';

export const addTodo = (todo: Todo) => {
  return { type: TYPES.ADD_TODO, payload: todo };
};

export const todoWasAdded = () => ({ type: 'TODO_WAS_ADDED' });