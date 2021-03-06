export default function reducer(state={
  tweets: [],
}, action){
  if (action.type === "GET_TWEETS") {
    return {tweets: action.payload}
  }
  else if(action.type === "ADD_TWEET") {
    return {tweets: state.tweets.concat(action.payload)}
  }
  else {
    return {tweets: state.tweets}
    }
}
