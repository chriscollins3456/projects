import React from "react";
import styles from './Userbox.css';


class Userbox extends React.Component {
  render(){
    return (
        <div className={styles.userBox}>
          <p>Paul Dilyard</p>
          <p className={styles.handle}>@p-dilly</p>
          <div className={styles.userInfo}>
            <div className={styles.numTweets}>
              <p># Tweets</p>
              <p>{this.props.numTweets}</p>
              </div>
              <div className={styles.numFollowing}>
						       <p>Following</p>
                   <p>{this.props.numFollowing}</p>
					    </div>
					    <div className={styles.numFollowers}>
							   <p>Followers</p>
                 <p>{this.props.numFollowers}</p>
					    </div>
            </div>
        </div>
    )
  }
}

export default Userbox
