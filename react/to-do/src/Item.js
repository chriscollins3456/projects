import React from "react";
import "./Item.css";

class Item extends React.Component {
  render(){
    return (
      <div className='itemContainer'>
        <p>{this.props.value}</p>
      </div>
    )
  }
}

export default Item;
