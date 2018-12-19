import { combineReducers } from 'redux';
import restaurant from './reducers/restaurant';
import { routerReducer } from 'react-router-redux';
export default combineReducers({
  restaurant,
  router: routerReducer
});