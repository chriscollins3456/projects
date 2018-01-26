import React from "react";
import './Userbox.css';
import paul from './paul.jpg'

class Userbox extends React.Component {
  render(){
    return (
        <div className='userBox'>
          <img src={paul} alt='' className='profilePic'></img>
          <div className='userInfo'>
            <p className='username'>{this.props.username}</p>
            <p className='handle'>@{this.props.handle}</p>
          </div>
          <div className='userStats'>
            <div className='numTweets'>
              <p># Tweets</p>
              <p className='stats'>{this.props.numTweets}</p>
              </div>
              <div className='numFollowing'>
						       <p>Following</p>
                   <p className='stats'>{this.props.numFollowing}</p>
					    </div>
					    <div className='numFollowers'>
							   <p>Followers</p>
                 <p className='stats'>{this.props.numFollowers}</p>
					    </div>
            </div>
        </div>
    )
  }
}

export default Userbox
