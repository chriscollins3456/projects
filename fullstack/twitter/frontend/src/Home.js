import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import Userbox from "./Userbox";
import Tweet from "./Tweet";
import Submit from "./Submit";

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tweets : [],
      loading: true,
      user: 1,
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
          <Link to='/logout'>logout</Link>
        </div>
        <div className='homeFeed'>
          <div className='userColumn'>
            <Userbox user={this.state.user} handle={this.state.handle} numTweets={this.state.tweets.length} numFollowers="300" numFollowing="250"></Userbox>
          </div>
          <div className='tweetColumn'>
            <Submit user={this.state.user} handle={this.state.handle}></Submit>
            {this.state.loading && <p>loading</p>}
            {this.state.tweets.map(tweet => <Tweet key={tweet.id} text={tweet.text} username={tweet.username} handle={tweet.handle} date={tweet.date}></Tweet>)}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
