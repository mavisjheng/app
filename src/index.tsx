import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './store/configureStore';
import { App, Page, LeftSideNav } from './components';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <div>
        <App />
        <Page />
        <LeftSideNav />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
