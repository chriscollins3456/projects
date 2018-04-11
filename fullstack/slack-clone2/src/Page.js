import React, { Component } from 'react';
import Header from './Header';
import Channel from "./Channel";
import Message from "./Message";
import data from "./data.json";
import {Redirect} from 'react-router-dom';
import './Page.css';

class Page extends Component {
  constructor(props){
    super(props);
    this.state = {
      channel: this.props.channel,
      data: data,
      message: '',
      page: this.props.page
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event){
    this.setState({message: event.target.value})
  }

  handleSubmit(event){
    console.log(this.state.message)
    event.preventDefault();
    this.setState({message: ''})
  }

  handleClick(channel){
    this.setState({page: '/' + channel})
  }

  render() {
    if(this.state.page !== this.props.page)
      return <Redirect to={this.state.page} />
    return (
      <div className = "App">
        <div className = "Channels">
          <div className = "HeaderBox">
            <h2>Channels</h2>
          </div>
          {this.state.data.map(channel => <Channel onClick={this.handleClick} value={channel.id} key={channel.id} channel={channel.channel} clicked={this.state.channel}></Channel>)}
        </div>
        <div className = "Feed">
          <Header channel={this.state.data[this.state.channel].channel} subscribers={this.state.data[this.state.channel].subscribers}></Header>
          <div className="Messages">
            {this.state.data[this.state.channel].messages.map(message => <Message key={message.id} user={message.user.username} text={message.text}></Message>)}
          </div>
          <div className = "Submit" onSubmit={this.handleSubmit}>
            <form>
              <input type="text" placeholder="type your message here" className="MessageSubmit" value={this.state.message} onChange={this.handleChange}></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
