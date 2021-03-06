import { combineReducers } from 'redux';
import counterReducer from './reducer-counter';
import tweetsReducer from './reducer-tweets';
import todosReducer from "./reducer-todos";

const allReducers = combineReducers({
  counter: counterReducer,
  tweets: tweetsReducer,
  todos: todosReducer,
});

export default allReducers;
