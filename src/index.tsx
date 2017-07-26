import 'rxjs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { CreateStore } from './lib';
import { MainContainer, NotFoundContainer } from './containers';
import registerServiceWorker from './registerServiceWorker';
import { Layout } from './components';

const history = createBrowserHistory();
const store = CreateStore(history);

console.log(NotFoundContainer);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route component={NotFoundContainer} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
