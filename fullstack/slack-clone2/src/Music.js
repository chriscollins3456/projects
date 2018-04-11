import React, { Component } from 'react';
import Page from './Page';

class Music extends Component {
  render(){
    return(
      <Page channel={1} page='/music' />
    )
  }
}


export default Music;
