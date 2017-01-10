import React, { Component } from 'react';

export default class Intro extends Component {
  handleClick(){
    if ( this.props.w === 999) {
      this.props.rez(960);
    }else {
      this.props.rez(999);
    }
  }

  render(){
    return(
      <div>
        <p>This is the intro</p>
        <p>The width is {this.props.w}</p>
        <button onClick={this.handleClick.bind(this)}>Click Me</button>
      </div>
    )
  }
}
