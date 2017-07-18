import { Action } from 'redux';
import { Dispatch } from 'redux';

/**
 * @Note: Declare global variables
 */
declare global {
  interface IAction extends Action {
    payload?: any;
  }

  interface IProps {
    actions: any;
    router: any;
    dispatch: Dispatch<void>;
  }
}
