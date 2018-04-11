import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h2>#{this.props.channel}</h2>
        <div>{this.props.subscribers} subscribers</div>
      </div>
    )
  }
}

export default Header;
