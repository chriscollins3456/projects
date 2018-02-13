import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const reducer = function(state={counter: 0}, action){
  if (action.type === "INC"){
    return state.counter+action.payload;
  }
  return state.counter;
}

const middleware = applyMiddleware(thunk)

export default createStore(reducer, middleware);
