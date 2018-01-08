import React from "react";
import './Tweet.css';


class Tweet extends React.Component{
  render(){
    return(
    <div className='tweet'>
      <div className='username'>
        <p>{this.props.username}</p>
      </div>
      <div className='handle'>
        <p>@handle</p>
      </div>
      <p>{this.props.text}</p>
      <div className='date'>
        <p>{this.props.date}</p>
      </div>
    </div>
  )
  }
}

export default Tweet
