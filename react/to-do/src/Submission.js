import React from "react";
import "./Submission.css";

class Submission extends React.Component {
  render() {
    return(
      <form>
        <input type= "text" className="input" placeholder="Thing to do" value={this.props.entry}></input>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Submission;
