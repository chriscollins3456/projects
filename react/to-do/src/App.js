import React, { Component } from 'react';
import Entry from "./Entry";
import Item from "./Item";
import './App.css';
import './App.css';

const add = function (a, b){
  return a + b
}

add(1,2)

const addMe = (a, b) => {
  return a + b
}

addMe(1,2)

const addMe2 = (a, b) => a + b

function map(arr, fn){
  var results = []
  for(var i = 0; i < arr.length; i++){
    var result = fn(arr[i], i)
    results.push(result)
  }
  return results
}

const numbers = [1,2,3]
const square = n => n*n
const timestwo = n => n*2
const addindex = (n, i) => n+i
console.log(numbers)
console.log(map(numbers, n => n*2))
console.log(map(numbers, timestwo))
console.log(map(numbers, square))
console.log(map(numbers, addindex))

console.log(map(['this, thing'], (entry, i) => <Item key={i} value={entry}></Item>))


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
    this.addEntry = this.addEntry.bind(this)
  }

  addEntry(text) {
    const newEntries = this.state.entries.concat([text])
    this.setState({entries: newEntries})
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To-Do List</h1>
        </header>
        <Entry addEntry={this.addEntry}></Entry>
        {map(this.state.entries, (entry, i) => <Item key={i} value={entry}></Item>)}
      </div>
    );
  }
}

export default App;
