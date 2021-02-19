import React, { Component } from "react";
// import { Button } from "bootstrap";
class FebComponent extends Component {
  state = {
    count: 0,
    // imageURL: "https://picsum.photos/200",
  };
  // functions defined here
  formatCount() {
    // return this.state.count === 0 ? "Zero" : this.state.count;

    // destructure this object
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }

  render() {
    return (
      <div>
        <h3>Hello again</h3>
        {/* <img url={this.state.imageURL} alt='randomimge' /> */}
        {/* jsx expression */}
        <span className='badge badge-primary'>{this.formatCount()}</span>
        
      </div>
    );
  }
  // functions defined here
}

export default FebComponent;
