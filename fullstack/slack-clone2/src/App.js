import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import General from './General';
import Music from './Music';
import Random from './Random';
import Nyc from './Nyc'

class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <Route exact path='/' component={General} />
          <Route exact path='/general' component={General} />
          <Route exact path='/music' component={Music} />
          <Route exact path='/random' component={Random} />
          <Route exact path='/nyc' component={Nyc} />
        </div>
      </Router>
    )
  }
}

export default App;
