import React from "react";
import "./Colors.css";

class ColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.addColor = this.addColor.bind(this)
  }

  addColor(event){
    this.props.handleColor(this.props.color)
  }

  render() {
    return(
      <div className='colorbutton' onClick={this.addColor} style={{backgroundColor: this.props.color}}></div>
    )
  }
}

export default ColorButton;
