import { createStore, applyMiddleware, Store, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import { History } from 'history';

import { RootReducer, RootEpics } from './';

export default function (history: History) {

  // Build the middleware for intercepting and dispatching navigation actions
  const routerMiddleware = createRouterMiddleware(history);
  const epicMiddleware = createEpicMiddleware(RootEpics);

  const composeEnhancers =
    typeof window === 'object' &&
      window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
      ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({})
      : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(
      epicMiddleware,
      routerMiddleware,
      createLogger(),
    ),
    // other store enhancers if any
  );

  const store: Store<any> = createStore(
    RootReducer,
    enhancer,
  );

  return store;
}