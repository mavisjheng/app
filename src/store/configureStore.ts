import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
const middlewares = [routerMiddleware(history)];

if (process.env.NODE_ENV === `development`) {
  const { createLogger } = require(`redux-logger`);
  middlewares.push(createLogger({ collapsed: true }));
}

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);
