import React from "react";
import "./Item.css";
import ColorButton from "./Colors";

const Colors = ['#e2243d', '#fffc5b', '#4de259', 'white']

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleColor = this.handleColor.bind(this)
  }

  handleClick(event){
    this.props.deleteEntry(this.props.id)
  }

  handleColor(color){
    this.props.changeColor(this.props.id, color)
  }

  render(){
    return (
      <div className='itemContainer' style={{backgroundColor: this.props.color}}>
        <div className='colorContainer'></div>
          {Colors.map(color => <ColorButton color={color} handleColor={this.handleColor}></ColorButton>)}
        <button onClick={this.handleClick}>delete</button>
        <p className='toDo'>{this.props.value}</p>
        <p className='date'>{this.props.date}</p>
      </div>
    )
  }
}

export default Item;
