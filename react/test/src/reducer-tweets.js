export default function reducer(state={
  tweets: [],
}, action){
  if (action.type === "GET_TWEETS") {
    return {tweets: action.payload}
  }
  else {
    return {tweets: state.tweets}
    }
}
