import React, { Component } from 'react';
import Page from './Page';

class General extends Component {
  render(){
    return(
      <Page channel={0} page='/general' />
    )
  }
}

export default General;
