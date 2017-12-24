import React, { Component } from 'react';
import Entry from "./Entry";
import Item from "./Item";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
    this.addEntry = this.addEntry.bind(this)
    this.changeColor = this.changeColor.bind(this)
    this.deleteEntry = this.deleteEntry.bind(this)
  }

  addEntry(todo) {
    const newEntries = this.state.entries.concat(todo)
    this.setState({
      entries: newEntries
    })
  }

  changeColor(todo, color){
    const index = this.state.entries.findIndex(i => i.id == todo)
    this.state.entries[index].colors = color
    this.setState({entries: this.state.entries})
  }

  deleteEntry(todo){
    const index = this.state.entries.findIndex(i => i.id == todo)
    this.state.entries.splice(index, 1)
    this.setState({
      entries: this.state.entries,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To-Do List</h1>
        </header>
        <Entry addEntry={this.addEntry}></Entry>
        {this.state.entries.map(entry => <Item key={entry.id} id={entry.id} value={entry.text} date={entry.dates} color={entry.colors} deleteEntry={this.deleteEntry} changeColor={this.changeColor}></Item>)}

      </div>
    );
  }
}

export default App;
