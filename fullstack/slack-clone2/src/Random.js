import React, { Component } from 'react';
import Page from './Page';

class Random extends Component {
  render(){
    return(
      <Page channel={2} page='/random' />
    )
  }
}

export default Random;
