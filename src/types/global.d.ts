import { Action, Dispatch } from 'redux';

/**
 * @Note: Declare global variables
 */
declare global {
  interface IAction extends Action {
    payload?: any;
  }

  interface IMatch {
    isExact: boolean;
    params: any;
    path: string;
    url: string;
  }

  interface IProps {
    actions: any;
    router: any;
    dispatch: Dispatch<void>;
    match: IMatch;
    children: JSX.IntrinsicAttributes | string;
  }
}
