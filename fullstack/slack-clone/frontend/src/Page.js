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
    var myInit = { method: 'post',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                text: this.state.message,
                user_id : 1,
                channel_id: this.props.channel.id
              })
            };
  fetch('http://localhost:4000/channels', myInit)
  .then(response => response.json())
}
  
  render() {
    return (
      <div className = "Page">
        <Header name={this.props.channel.name} subscribers={this.props.channel.users.length}></Header>
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
