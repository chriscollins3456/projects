import React from "react";
import "./Entry.css";

class Entry extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({text: ''})
    this.props.addEntry(this.state.text)
  }

  handleChange(event) {
    this.setState({text: event.target.value})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type= "text" className="input" placeholder="Thing to do" value={this.state.text} onChange={this.handleChange}></input>
          <input type="submit" value="Submit" />
        </form>
        <div className='divider'></div>
      </div>
    )
  }
}

export default Entry;
