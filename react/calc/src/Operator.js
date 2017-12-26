import React from "react";
import "./Operator.css";

class Operator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    this.props.clickOperator(this.props.value)
  }

  render(){
    return(
      <button className='operator' onClick={this.handleClick}>{this.props.button}</button>
    )
  }
}

export default Operator
