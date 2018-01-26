import React from 'react';
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
        handle: '',
        id: '',
        token: "none",
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
    event.preventDefault();
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
    if(this.state.loggedIn.token !== "none" && this.state.loggedIn.token !== "incorrect"){
      localStorage.setItem("token", this.state.loggedIn.token)
      localStorage.setItem("id", this.state.loggedIn.id)
      localStorage.setItem("handle", this.state.loggedIn.handle)
      localStorage.setItem("username", this.state.username)
      return <Redirect to='/' />
    }
    if(this.state.loggedIn.token === "incorrect"){
      alert("wrong username or password")
      this.setState({loggedIn: {token: "none"}})
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
        </div>
      </div>
    );
  }
}

export default Logout;
