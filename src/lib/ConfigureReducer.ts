import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { MainReducer as main } from './../containers/main';

const rootReducer = combineReducers({
  main,
  router: routerReducer,
});

export default rootReducer;