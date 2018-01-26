import React from 'react';
import './Home.css';
import {Link, Redirect} from 'react-router-dom';
import Userbox from "./Userbox";
import Tweet from "./Tweet";
import Submit from "./Submit";

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tweets : [],
      loading: true,
      id: localStorage.getItem("id"),
      username: localStorage.getItem("username"),
      handle: localStorage.getItem("handle"),
      token: localStorage.getItem("token"),
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:5000/')
    .then(response => response.json())
    .then(response => {
      this.setState(
        {tweets: response,
        loading: false}
      )
    })
  }

  handleClick(){
    localStorage.clear();
  }

  render() {

    if(!localStorage.getItem("token")){
      return <Redirect to='/login' />
    }

    return (
      <div className='App'>
        <div className='AppHeader'>
          <h2>Twitter</h2>
          <Link to='/login' onClick={this.handleClick}>logout</Link>
        </div>
        <div className='homeFeed'>
          <div className='userColumn'>
            <Userbox username={this.state.username} handle={this.state.handle} numTweets={this.state.tweets.length} numFollowers="300" numFollowing="250"></Userbox>
          </div>
          <div className='tweetColumn'>
            <Submit id={this.state.id} handle={this.state.handle}></Submit>
            {this.state.loading && <p>loading</p>}
            {this.state.tweets.map(tweet => <Tweet key={tweet.id} text={tweet.text} username={tweet.username} handle={tweet.handle} date={tweet.date}></Tweet>)}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
