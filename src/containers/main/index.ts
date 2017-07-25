import MainReducer, { initialState as MainState } from './main.reducer';
import * as MainActions from './main.actions';
import MainContainer from './main.container';
import * as MainEpics from './main.epics';

export {
  MainReducer,
  MainActions,
  MainEpics,
  MainState,
};

export { Todo, IState } from './main.model';

export default MainContainer;