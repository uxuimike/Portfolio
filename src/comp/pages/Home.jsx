import React, { Component } from 'react';
import uxui from '../../img/uxui.svg';

export default class Home extends Component {

  render(){
    return(
      <div>
        <img src={uxui} className="Home-Intro-BG"></img>
        <h1>Mike Nichols</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl erat, aliquet et pretium eu, fringilla vel nisl. Proin condimentum pretium vestibulum.
        </p>
      </div>
    )
  }
}
