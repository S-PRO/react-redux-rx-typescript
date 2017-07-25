import { Todo, IState } from './main.model';
import * as TYPES from './main.types';

export const initialState: IState = {
  todos: [<Todo>{
    text: 'Use Redux with TypeScript',
    completed: false,
    id: 0
  }]
};

export default function MainReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case TYPES.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
}