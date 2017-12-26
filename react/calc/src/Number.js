import React from "react";
import "./Number.css";

class Numbers extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.props.clickNumber(this.props.value)
  }

  render() {
    return (
      <button className='number' onClick={this.handleClick}>{this.props.value}</button>
    )
  }
}

export default Numbers;
