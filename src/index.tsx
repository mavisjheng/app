import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Link } from 'react-router-dom';
import { history } from './store/configureStore';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <div>
        {Routes}
        <footer className="footer">
          <Link className="link" to="/">Index</Link>
          <Link className="link" to="/about">About</Link>
          <Link className="link" to="/hello">Hello</Link>
          <Link className="link" to="/product">Product</Link>
        </footer>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
