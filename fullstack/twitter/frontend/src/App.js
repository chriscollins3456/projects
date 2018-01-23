import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Account from './Account';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/logout' component={Login} />
          <Route exact path='/account' component={Account} />
        </div>
      </Router>
    );
  }
}

export default App;
