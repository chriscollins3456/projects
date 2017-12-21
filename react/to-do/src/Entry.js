import React from "react";
import "./Entry.css";

class Entry extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      due_date: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addEntry(this.state.text)
    this.props.addDate(this.state.due_date)
    this.setState({
      text: '',
      due_date: '',
    })
  }

  handleChange(event) {
    this.setState({text: event.target.value})
  }

  handleDate(event) {
    this.setState({due_date: event.target.value})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type= "text" className="input" placeholder="Thing to do" value={this.state.text} onChange={this.handleChange}></input>
          <input type= "text" className="due_date" placeholder="Do by" value={this.state.due_date} onChange={this.handleDate}></input>
          <input type="submit" value="Submit" />
        </form>
        <div className='divider'></div>
      </div>
    )
  }
}

export default Entry;
