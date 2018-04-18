import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Page from './Page'
import Channel from './Channel'

class RenderPage extends Component{
  render(){
    while(this.props.loading){
      return null
    }
    const channelName = this.props.match.params.channel
    const channel = this.props.data.find(channel => channel.name === channelName)
    return(
      <Page channel={channel} />
    )
  }
}

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      clickedChannel: '',
      data: [],
      loading: true
    }
    this.channelClicked = this.channelClicked.bind(this);
  }
  
  channelClicked(clickedChannel){
    this.setState({clickedChannel: clickedChannel})
  }
  
  componentDidMount() {
    fetch('http://localhost:4000/channels')
    .then(response => response.json())
    .then(response => {
      this.setState({
        data: response,
        loading: false
      })
    })
  }
  
  render(){
    return(
      <Router>
        <div className = "App">
          <div className = "Channels">
            <div className = "HeaderBox">
              <h2>Channels</h2>
            </div>
            {this.state.data.map(channel => <Channel key={channel.id} name={channel.name} onClick={this.channelClicked} clickedChannel={this.state.clickedChannel} />)}
          </div>
          <div className="Feed">
            <Route exact path='/:channel' render={props => <RenderPage loading={this.state.loading} data={this.state.data} {...props} />} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
