import React, { Component } from 'react';
import styles from './Twitter.css';
import Userbox from "./Userbox";
import Tweet from "./Tweet";

class Twitter extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.AppHeader}>
          <h2>Twitter</h2>
        </div>
        <div className={styles.homeFeed}>
          <div className={styles.userColumn}>
            <Userbox numTweets="20" numFollowers="300" numFollowing="250"></Userbox>
          </div>
          <div className={styles.tweetColumn}>
            <Tweet text="this is a tweet"></Tweet>
            <Tweet text="I'm inserting text into this tweet"></Tweet>
            <Tweet text="something"></Tweet>
            <Tweet text={this.props.tweets}></Tweet>
          </div>
        </div>
      </div>
    );
  }
}

export default Twitter;
