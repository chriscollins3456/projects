import React, { Component } from 'react';
import "./App.css";
import Numbers from "./Number"
import Operator from "./Operator"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      operand: '',
      operator: '',
      operatorClicked: false,
    }
    this.clickNumber = this.clickNumber.bind(this)
    this.clickOperator = this.clickOperator.bind(this)
    this.clear = this.clear.bind(this)
    this.equals = this.equals.bind(this)
  }

  clickNumber(number){
    if (this.state.operatorClicked === true){
      this.setState({
        value: number,
        operand: this.state.operand,
        operator: this.state.operator,
        operatorClicked: null,
      })
    }
    else {
      const newNumber = this.state.value.concat(number)
      this.setState({
        value: newNumber,
        operand: this.state.operand,
        operator: this.state.operator,
        operatorClicked: null,
      })
    }
  }

  clickOperator(operator){
    if (this.state.operatorClicked === false) {
      this.setState({
        value: this.state.value,
        operand: this.state.value,
        operator: operator,
        operatorClicked: true,
      })
    }
    else {
      const newValue = eval(this.state.operand + this.state.operator + this.state.value)
      this.setState({
        value: newValue,
        operand: newValue,
        operator: operator,
        operatorClicked: true,
      })
    }
  }

  clear(event){
    this.setState({
      value: '',
      operand: '',
      operator: '',
      operatorClicked: false,
    })
  }

  equals(event){
    const newValue = eval(this.state.operand + this.state.operator + this.state.value)
    this.setState({
      value: newValue,
      operand: '',
      operator: '',
      operatorClicked: true,
    })
  }

  render() {
    return(
      <div className='container'>
        <div className='row'>
          <div className='display'>{this.state.value}</div>
        </div>
        <div className='row'>
          <button className='clear' onClick={this.clear}>clear</button>
        </div>
        <div className='row'>
          <Numbers value='7' clickNumber={this.clickNumber}></Numbers>
          <Numbers value='8' clickNumber={this.clickNumber}></Numbers>
          <Numbers value='9' clickNumber={this.clickNumber}></Numbers>
          <Operator value='/' button='%' clickOperator={this.clickOperator}></Operator>
        </div>
        <div className='row'>
          <Numbers value='4' clickNumber={this.clickNumber}></Numbers>
          <Numbers value='5' clickNumber={this.clickNumber}></Numbers>
          <Numbers value='6' clickNumber={this.clickNumber}></Numbers>
          <Operator value='*' button='x' clickOperator={this.clickOperator}></Operator>
        </div>
        <div className='row'>
          <Numbers value='1' clickNumber={this.clickNumber}></Numbers>
          <Numbers value='2' clickNumber={this.clickNumber}></Numbers>
          <Numbers value='3' clickNumber={this.clickNumber}></Numbers>
          <Operator value='-' button='-' clickOperator={this.clickOperator}></Operator>
        </div>
        <div className='row'>
          <Numbers value='0' clickNumber={this.clickNumber}></Numbers>
          <Numbers value='.' clickNumber={this.clickNumber}></Numbers>
          <button className='equals' onClick={this.equals}>=</button>
          <Operator value='+' button='+' clickOperator={this.clickOperator}></Operator>
        </div>
      </div>
    )
  }
}

export default App;
