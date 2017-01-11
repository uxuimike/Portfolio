import React, { Component } from 'react';
import uxui from '../img/uxui.svg';
import {connect} from 'react-redux';

@connect((store) => {
    return {
        user : store.users.user,
        viewSize : store.view
    }
})

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
        <img src={uxui} className="Home-Intro-BG"></img>
        <h1>Mike Nichols</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl erat, aliquet et pretium eu, fringilla vel nisl. Proin condimentum pretium vestibulum.{this.props.viewSize.width}
        </p>
        <p>The width is {this.props.w}</p>
        <button onClick={this.handleClick.bind(this)}>Click Me</button>
      </div>
    )
  }
}
