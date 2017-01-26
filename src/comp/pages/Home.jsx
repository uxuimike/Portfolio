import React, { Component } from 'react';
import Intro from '../Intro.jsx';
import HomeAbout from '../HomeAbout.jsx';
import BlocksSection from '../BlocksSection.jsx'
import {connect} from 'react-redux';

import * as backslideActs from '../../actions/backslideActions';
import * as viewActs from '../../actions/viewActions';

//Background Images
import imgUXUI from '../../img/uxui.svg';

@connect((store) => {
    return {
        slide : store.backslide
    }
})


export default class Home extends Component {

  onSetBG() {
    if (this.flipper){
      this.flipper = false;
      this.props.dispatch(backslideActs.setBg({
        duration: 0.5,
        outAnimation: 'Slide-Out-Left',
        inAnimation: 'Fade-In',
        inEase: 'ease-in',
        outEase: 'ease-out',
        backgroundColor: 'rgb(255, 255, 255)',
        bgImg: 'http://surfwheelusa.com/img/surfwheelMain.jpg',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      }))
    }else {
      this.flipper = true;
      this.props.dispatch(backslideActs.setBg({
        duration: 0.5,
        outAnimation: 'Fade-Out',
        inAnimation: 'Slide-In-Right',
        inEase: 'linear',
        outEase: 'linear',
        backgroundColor: 'transparent',
        bgImg: imgUXUI,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      }))
    }
  }


  render(){

    return(
      <div id='CurrentPage' className='Page-Wrap'>
        <button onClick={this.onSetBG.bind(this)}>Change Color</button>
        <Intro />
        <HomeAbout />
        <BlocksSection title='Selected Work' linkTo={{title: 'See All Work', to:'work'}}/>
        <BlocksSection title='Blog'/>
      </div>
    )
  }
}
