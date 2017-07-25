import 'rxjs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { CreateStore } from './lib';
import { MainContainer } from './containers';
import registerServiceWorker from './registerServiceWorker';
import { LayoutComponent } from './components';

const history = createBrowserHistory();
const store = CreateStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LayoutComponent>
        <Route path="/" component={MainContainer} />
      </LayoutComponent>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
