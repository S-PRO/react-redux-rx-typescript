import { IState } from './main.model';
// import * as TYPES from './main.types';

export const initialState: IState = {
  authKey: null
};

export default function MainReducer(state = initialState, action: IAction) {
  switch (action.type) {
    default:
      return state;
  }
}