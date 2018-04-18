import React, { Component } from 'react';
import "./Message.css"

class Message extends Component {
  render() {
    return(
      <div className="Message">
        <div className="User">{this.props.user}</div>
        <div className="Text">{this.props.text}</div>
      </div>
    )
  }
}

export default Message;
