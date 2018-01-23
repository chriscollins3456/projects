import React, { Component } from 'react';
import './Account.css';
import {Redirect} from 'react-router-dom';

class Account extends React.Component{
  constructor(props){
    super(props);
    this.state={
      username: '',
      password: '',
      handle:'',
      page: '/account'
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleHandle = this.handleHandle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event){
    this.setState({username: event.target.value})
  }

  handlePassword(event){
    this.setState({password: event.target.value})
  }

  handleHandle(event){
    this.setState({handle: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();

    var myInit = { method: 'POST',
                  headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                handle: this.state.handle,
              })
            };
      fetch('http://localhost:5000/account', myInit)
      .then(response => response.json())

    this.setState({page: '/'})

  }

  render(){
    return(
      <div>
        <form className='accountBox' onSubmit={this.handleSubmit}>
          <h4>Username:</h4>
          <input type='text' value={this.state.username} onChange={this.handleUsername}></input>
          <h4>Password:</h4>
          <input type='text' value={this.state.password} onChange={this.handlePassword}></input>
          <h4>Handle:</h4>
          <input type='text' value={this.state.handle} onChange={this.handleHandle}></input>
          <input type='submit'></input>
        </form>
        <Redirect to={this.state.page} />
      </div>
    )
  }
}

export default Account;
