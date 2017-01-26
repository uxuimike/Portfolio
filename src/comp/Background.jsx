import React, { Component } from 'react';
import {connect} from 'react-redux';


import * as bgActs from '../actions/backgroundActions';

@connect((store) => {
    return {
        bg : store.bg
    }
})

export default class Backslide extends Component {

  constructor() {
    super();

    this.transitionTimer = 1;

    this.state = {
      backgroundColor: 'rgb(242, 242, 242)',
      bgImg: 'none',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      duration: 2,
      outAnimation: 'none',
      inAnimation: 'none',
      outEase: 'linear',
      inEase: 'linear',
      inTransition: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.inTransition) {
      clearTimeout(this.transitionTimer);
      this.onTransitionEnd();
    }

    this.transitionTimer = setTimeout(this.onTransitionEnd.bind(this), nextProps.bg.duration*1000);
    this.setState({inTransition: true, duration: nextProps.bg.duration, inAnimation: nextProps.bg.inAnimation, outAnimation: nextProps.bg.outAnimation});


  }

  onTransitionEnd() {
    console.log("Transition End", this.props);
    this.setState({
      inTransition: false,
      backgroundColor: this.props.bg.backgroundColor,
      bgImg: this.props.bg.bgImg,
      backgroundRepeat: this.props.bg.backgroundRepeat,
      backgroundPosition: this.props.bg.backgroundPosition,
      backgroundSize: this.props.bg.backgroundSize,
      inAnimation: 'none',
      outAnimation: 'none'
    });
  }

  render(){

    let newStyle = {
      display: this.state.inTransition ? 'block' : 'none',
      animationFillMode: 'forwards',
      animation: this.state.inAnimation + ' ' + this.state.duration + 's linear',
      backgroundColor: this.props.bg.backgroundColor,
      backgroundImage: 'url(' + this.props.bg.bgImg + ')',
      backgroundRepeat: this.props.bg.backgroundRepeat,
      backgroundPosition: this.props.bg.backgroundPosition,
      backgroundSize: this.props.bg.backgroundSize,
    };

    let currentStyle = {
      animationFillMode: 'forwards',
      animation: this.state.outAnimation + ' ' + this.state.duration + 's linear',
      backgroundColor: this.state.backgroundColor,
      backgroundImage: 'url(' + this.state.bgImg + ')',
      backgroundRepeat: this.state.backgroundRepeat,
      backgroundPosition: this.state.backgroundPosition,
      backgroundSize: this.state.backgroundSize,
    };

    return(
      <div className="Background-Wrap">
        {this.props.bg.opacity}
        <div id='newBG' className={'Background-Block'} style={newStyle} >New</div>
        <div id='currentBG' className={'Background-Block'} style={currentStyle} >Current</div>
      </div>
    )
  }
}
