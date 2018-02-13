import { combineReducers } from 'redux';
import counterReducer from './reducer-counter';
import tweetsReducer from './reducer-tweets';

const allReducers = combineReducers({
  counter: counterReducer,
  tweets: tweetsReducer,
});

export default allReducers;
