import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import enthusiasm from './enthusiasm';

const rootReducer = combineReducers({
  enthusiasm,
  routing
});

export default rootReducer;
