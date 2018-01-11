import React from 'react';
import './Submit.css';


class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      text: '',
      user: this.props.user,
      handle: this.props.handle,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({text: event.target.value})
  }

  handleSubmit(event){
    var myInit = { method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                text: this.state.text,
                user: this.state.user,
                handle: this.state.handle,
              })
            };
  fetch('http://localhost:5000/tweet', myInit)
  .then(response => response.json())
}

  render() {
    return(
      <form className='submit' onSubmit={this.handleSubmit}>
        <input className='textBox' type='text' name='text' placeholder="What's on your mind?" onChange={this.handleChange}></input>
        <br></br>
        <input className='tweetButton' type='submit' value='Tweet'></input>
      </form>
    )
  }
}

export default Submit;
