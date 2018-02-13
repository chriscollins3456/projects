import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchTweets } from './actions';


class App extends Component {
  constructor(props){
    super(props);
    this.handleINC = this.handleINC.bind(this);
    this.handleDEC = this.handleDEC.bind(this);
  }

  handleINC(event){
    this.props.dispatch({type: "INC", payload: 1})
  }
  handleDEC(event){
    this.props.dispatch({type: "DEC", payload: 1})
  }

  componentDidMount() {
    this.props.dispatch(fetchTweets())
  }

  render() {
    return (
      <div className="App">
        <h1>Learning Redux</h1>
        <button onClick={this.handleINC}>Increment</button>
        <button onClick={this.handleDEC}>Decrement</button>
        <p>{this.props.counter}</p>
        {this.props.tweets.map(tweet => <p key={tweet.id}>{tweet.text}</p>)}

      </div>
    );
  }
}

function mapStateToProps(store){
  return {
    counter: store.counter.counter,
    tweets: store.tweets.tweets,
  };
}

export default connect(mapStateToProps)(App);
