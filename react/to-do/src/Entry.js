import React from "react";
import "./Entry.css";

class Entry extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      entry: [{
        id: 0,
        text: '',
        dates: '',
        colors: '',
      }],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addEntry(this.state.entry)
    this.setState({
      entry: [{
        id: this.state.entry[0].id + 1,
        text: '',
        dates: '',
        colors: '',
      }]
    })
  }

  handleChange(event) {
    const newDate = this.state.entry[0].dates
    const newID = this.state.entry[0].id
    this.setState({
      entry: [{
        id: newID,
        text: event.target.value,
        dates: newDate,
        colors: '',
      }]
    })
  }

  handleDate(event) {
    const newText = this.state.entry[0].text
    const newID = this.state.entry[0].id
    this.setState({
      entry: [{
        id: newID,
        text: newText,
        dates: event.target.value,
        colors: '',
      }]
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type= "text" className="input" placeholder="Thing to do" value={this.state.entry[0].text} onChange={this.handleChange}></input>
          <input type= "text" className="due_date" placeholder="Do by" value={this.state.entry[0].dates} onChange={this.handleDate}></input>
          <input type="submit" value="Submit" />
        </form>
        <div className='divider'></div>
      </div>
    )
  }
}

export default Entry;
