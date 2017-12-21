import React from "react";
import "./Item.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleRed = this.handleRed.bind(this)
    this.handleYellow = this.handleYellow.bind(this)
    this.handleGreen = this.handleGreen.bind(this)
    this.handleWhite = this.handleWhite.bind(this)
  }

  handleClick(event){
    this.props.deleteEntry(this.props.value)
  }

  handleRed(event){
    this.props.changeRed(this.props.value)
  }
  handleYellow(event){
    this.props.changeYellow(this.props.value)
  }
  handleGreen(event){
    this.props.changeGreen(this.props.value)
  }
  handleWhite(event){
    this.props.changeWhite(this.props.value)
  }

  render(){
    return (
      <div className='itemContainer' style={{backgroundColor: this.props.color}}>
        <div className='red' onClick={this.handleRed}></div>
        <div className='yellow' onClick={this.handleYellow}></div>
        <div className='green' onClick={this.handleGreen}></div>
        <div className='white' onClick={this.handleWhite}></div>
        <button onClick={this.handleClick}>delete</button>
        <p className='toDo'>{this.props.value}</p>
        <p className='date'>{this.props.date}</p>
      </div>
    )
  }
}

export default Item;
