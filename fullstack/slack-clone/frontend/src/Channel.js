import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./Channel.css"

class Channel extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.props.onClick(this.props.name)
  }
  
    render() {
      return(
        <Link to={'/'+this.props.name} onClick={this.handleClick}>
          <div style={this.props.name === this.props.clickedChannel ? {backgroundColor: "#265294"} : {}} className="Channel">
            <p>{this.props.name}</p>
          </div>
        </Link>
      )
  }
}

export default Channel;

