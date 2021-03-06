import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchTweets, addTodo } from './actions';


class App extends Component {
  constructor(props){
    super(props);
    this.handleINC = this.handleINC.bind(this);
    this.handleDEC = this.handleDEC.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleINC(event){
    this.props.dispatch({type: "INC", payload: 4})
  }
  handleDEC(event){
    this.props.dispatch({type: "DEC", payload: 1})
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.dispatch(addTodo(this.refs.input.value))
  }

  componentDidMount() {
    this.props.fetchTweets()
  }

  render() {
    return (
      <div className="App">
        <h1>Learning Redux</h1>
        <button onClick={this.handleINC}>Increment</button>
        <button onClick={this.handleDEC}>Decrement</button>
        <p>{this.props.counter}</p>
        {this.props.tweets.map(tweet => <p key={tweet.id}>{tweet.text}</p>)}
        <h2>Fake to-do list</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="tweet" ref="input"></input>
          <input type="submit"></input>
        </form>
        <ul>
          {this.props.todos.map(todo => <li>{todo}</li>)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(store){
  return {
    counter: store.counter.counter,
    tweets: store.tweets.tweets,
    todos: store.todos.todos,
  };
}

function mapDispatchToProps(dispatch){
  return {
    fetchTweets: () => dispatch(fetchTweets())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
