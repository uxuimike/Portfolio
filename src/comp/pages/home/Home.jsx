import React, { Component } from 'react';
import HomeIntro from './comp/HomeIntro.jsx';
import HomeAbout from './comp/HomeAbout.jsx';
import HomeWork from './comp/HomeWork.jsx';
import HomeBlog from './comp/HomeBlog.jsx';

import {connect} from 'react-redux';

import Backslide from '../../Backslide.jsx'

@connect((store) => {
    return {
        view : store.view
    }
})

export default class Home extends Component {

  constructor() {
    super();
    this.ds = {
      duration: .6,
      outAnimation: 'none',
      inAnimation: 'Fade-In',
      inEase: 'ease-in',
      outEase: 'ease-out',
      style: {className: 'Home-Intro-BG', color: 'rgb(79, 79, 79)', border: 'solid 1px rgb(251, 108, 104)'}
    }

  }

  render(){

    return(
      <div id='HomePage' className='Page-Wrap' style={{color: this.props.view.style.color}}>
        <HomeIntro borderBottom={this.props.view.style.border}/>
        <HomeAbout borderBottom={this.props.view.style.border}/>
        <HomeWork borderBottom={this.props.view.style.border}/>
        <HomeBlog borderBottom={this.props.view.style.border}/>
        <Backslide defaultStyle='Home-Intro-BG'/>
      </div>
    )
  }
}
