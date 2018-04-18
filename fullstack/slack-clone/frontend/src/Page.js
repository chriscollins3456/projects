import React, { Component } from 'react';
import Header from './Header';
import Message from "./Message";
import './Page.css';

class Page extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({message: event.target.value})
  }

  handleSubmit(event){
    console.log(this.state.message)
    event.preventDefault();
    this.setState({message: ''})
  }

  render() {
    return (
      <div className = "Page">
        <Header name={this.props.channel.name} subscribers={this.props.channel.subscribers}></Header>
        <div className="Messages">
          {this.props.channel.messages.map(message => <Message key={message.id} user={message.user.username} text={message.text}></Message>)}
        </div>
        <div className = "Submit" onSubmit={this.handleSubmit}>
          <form>
            <input type="text" placeholder="type your message here" className="MessageSubmit" value={this.state.message} onChange={this.handleChange}></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Page;
