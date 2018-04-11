import React, { Component } from 'react';
import "./Channel.css"

class Channel extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.props.onClick(this.props.value)
  }
  
  render() {
    if(this.props.value === this.props.clicked){
      return(
        <div style={{backgroundColor: "#265294"}} onClick={this.handleClick} className="Channel">
          <p>{this.props.channel}</p>
        </div>
      )
    }
    else{
    return(
      <div style={{backgroundColor: "#003366"}} onClick={this.handleClick} className="Channel">
        <p>{this.props.channel}</p>
      </div>
    )
  }
  }
}

export default Channel;
