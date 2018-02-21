export default function reducer(state={
  counter: 0,
}, action) {
  if (action.type === "INC"){
    return {counter: state.counter + action.payload}
  }
  if(action.type === "DEC"){
    return {counter: state.counter - action.payload}
  }
  else{
    return state
  }
}
