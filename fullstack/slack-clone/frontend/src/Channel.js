import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import "./Channel.css"

class Channel extends Component {
    render() {
      return(
        <Link to={'/'+this.props.name}>
          <Route exact path="/:channel" render={({match}) => {
           if(match.params.channel === this.props.name){
             return(
             <div style={{backgroundColor: "#265294"}} className="Channel">
              <p>{this.props.name}</p>
            </div>)
           }
           else{
             return(
             <div className="Channel">
              <p>{this.props.name}</p>
            </div>)
           }
         }
       } />
        </Link>
      )
  }
}

export default Channel;

