export function fetchTweets() {
  return dispatch => {
    fetch('http://localhost:5000/')
    .then(response => response.json())
    .then(response => dispatch({type: "GET_TWEETS", payload: response}))
  }
}

export function addTodo(text) {
  return dispatch => {
    dispatch({type: "ADD_TODO", payload: text})
  }
}
