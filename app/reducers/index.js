import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import filter from './filter';

const rootReducer = combineReducers({
  filter,
  counter,
  routing
});

export default rootReducer;
