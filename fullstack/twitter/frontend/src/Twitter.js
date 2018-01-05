import React, { Component } from 'react';
import styles from './Twitter.css';
import Userbox from "./Userbox";
import Tweet from "./Tweet";

class Twitter extends Component {
  constructor(props){
    super(props);
    this.state = {
      tweets : [],
      loading: true
    }
  }
  componentDidMount() {
    fetch('http://localhost:5000')
    .then(response => response.json())
    .then(response => {
      this.setState(
        {tweets: response,
        loading: false}
      )
    })
  }
  render() {
    return (
      <div className='App'>
        <div className='AppHeader'>
          <h2>Twitter</h2>
        </div>
        <div className='homeFeed'>
          <div className='userColumn'>
            <Userbox numTweets="20" numFollowers="300" numFollowing="250"></Userbox>
          </div>
          <div className='tweetColumn'>
            {this.state.loading && <p>loading</p>}
            {this.state.tweets.map(tweet => <Tweet key={tweet.id} text={tweet.text} username={tweet.username} date={tweet.date}></Tweet>)}
          </div>
        </div>
      </div>
    );
  }
}

export default Twitter;
