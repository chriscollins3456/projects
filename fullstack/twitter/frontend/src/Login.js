import React, { Component } from 'react';
import './Login.css';
import {Link, Redirect} from 'react-router-dom';

class Logout extends React.Component{
  constructor(props){
    super(props);
    this.state={
      page: '/logout',
      username: '',
      password: '',
      loggedIn: {
        session: "",
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeUsername = this.changeUsername.bind(this)
    this.changePassword = this.changePassword.bind(this)
  }

  changeUsername(event){
    this.setState({username: event.target.value})
  }

  changePassword(event){
    this.setState({password: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    var myInit = { method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
              })
            };
    fetch('http://localhost:5000/login', myInit)
    .then(response => response.json())
    .then(response => this.setState({loggedIn: response}))
  }

  render(){

    if(this.state.loggedIn.session == "true"){
      this.setState({page: '/'})
    }
    if(this.state.loggedIn.session == "false"){
      alert("wrong username or password")
      this.setState({loggedIn: {session: ""}})
    }

    return(
      <div>
        <div className='loginBox'>
          <h2>Log In</h2>
          <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder='Username' onChange={this.changeUsername} value={this.state.username}></input>
            <input type='text' placeholder='Password' onChange={this.changePassword} value={this.state.password}></input>
            <input type='submit' value='Log In'></input>
          </form>
          <Link className='accountLink' to='/account'>Create New Account</Link>
          <Redirect to={this.state.page} />
        </div>
      </div>
    );
  }
}

export default Logout;
