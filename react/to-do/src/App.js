import React, { Component } from 'react';
import Entry from "./Entry";
import Item from "./Item";
import './App.css';
import './App.css';

function map(arr, fn){
  var results = []
  for(var i = 0; i < arr.length; i++){
    var result = fn(arr[i], i)
    results.push(result)
  }
  return results
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      dates: [],
      colors: [],
    };
    this.addEntry = this.addEntry.bind(this)
    this.addDate = this.addDate.bind(this)
    this.deleteEntry = this.deleteEntry.bind(this)
    this.changeRed = this.changeRed.bind(this)
    this.changeGreen = this.changeGreen.bind(this)
    this.changeYellow = this.changeYellow.bind(this)
    this.changeWhite = this.changeWhite.bind(this)
  }

  addEntry(text) {
    const newEntries = this.state.entries.concat([text])
    const newColors = this.state.colors.concat(['white'])
    this.setState({
      entries: newEntries,
      colors: newColors,
    })
  }

  addDate(date) {
    const newDates = this.state.dates.concat([date])
    this.setState({dates: newDates})
  }

  changeRed(todo){
    const i = this.state.entries.indexOf(todo)
    this.state.colors[i] = '#e2243d';
    this.setState({colors: this.state.colors})
  }
  changeYellow(todo){
    const i = this.state.entries.indexOf(todo)
    this.state.colors[i] = '#fffc5b';
    this.setState({colors: this.state.colors})
  }
  changeGreen(todo){
    const i = this.state.entries.indexOf(todo)
    this.state.colors[i] = '#4de259';
    this.setState({colors: this.state.colors})
  }
  changeWhite(todo){
    const i = this.state.entries.indexOf(todo)
    this.state.colors[i] = 'white';
    this.setState({colors: this.state.colors})
  }

  deleteEntry(todo){
    const i = this.state.entries.indexOf(todo)
    this.state.entries.splice(i, 1)
    this.state.dates.splice(i, 1)
    this.state.colors.splice(i, 1)
    this.setState({
      entries: this.state.entries,
      dates: this.state.dates,
      colors: this.state.colors,
    })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To-Do List</h1>
        </header>
        <Entry addEntry={this.addEntry} addDate={this.addDate}></Entry>
        {map(this.state.entries, (entry, i) => <Item key={i} value={entry} date={this.state.dates[i]} color={this.state.colors[i]} deleteEntry={this.deleteEntry} changeRed={this.changeRed} changeYellow={this.changeYellow} changeGreen={this.changeGreen} changeWhite={this.changeWhite}></Item>)}

      </div>
    );
  }
}

export default App;
