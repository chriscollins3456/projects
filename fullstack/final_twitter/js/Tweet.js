import React from "react";
import styles from './Tweet.css';


class Tweet extends React.Component{
  render(){
    return(
    <div className={styles.tweet}>
      <div className={styles.username}>
        <p>username</p>
      </div>
      <div className={styles.handle}>
        <p>@handle</p>
      </div>
      <p>{this.props.text}</p>
      <div className={styles.date}>
        <p>tweet date</p>
      </div>
    </div>
  )
  }
}

export default Tweet
