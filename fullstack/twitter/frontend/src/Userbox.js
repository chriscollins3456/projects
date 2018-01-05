import React from "react";
import styles from './Userbox.css';


class Userbox extends React.Component {
  render(){
    return (
        <div className='userBox'>
          <p>Paul Dilyard</p>
          <p className='handle'>@p-dilly</p>
          <div className='userInfo'>
            <div className='numTweets'>
              <p># Tweets</p>
              <p>{this.props.numTweets}</p>
              </div>
              <div className='numFollowing'>
						       <p>Following</p>
                   <p>{this.props.numFollowing}</p>
					    </div>
					    <div className='numFollowers'>
							   <p>Followers</p>
                 <p>{this.props.numFollowers}</p>
					    </div>
            </div>
        </div>
    )
  }
}

export default Userbox
