import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import books from './books';
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  books,
  visibilityFilter,
  routing
});

export default rootReducer;