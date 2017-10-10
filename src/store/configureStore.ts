import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

export function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(middleware)
  );
}
