export default function reducer(state={
  todos: []
}, action){
  if (action.type === "ADD_TODO"){
    return {todos: state.todos.concat(action.payload)}
  }
  else {
    return {todos: state.todos}
  }
}
