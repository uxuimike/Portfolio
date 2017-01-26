import React, { Component } from 'react';
import {connect} from 'react-redux';


import * as bgActs from '../actions/backslideActions';

@connect((store) => {
    return {
        slide : store.backslide
    }
})

export default class Backslide extends Component {

  constructor() {
    super();

    this.state = {
      duration: 2,
      inAnimation: 'none',
      outAnimation: 'none',
      inEase: 'linear',
      outEase: 'linear',
      backgroundColor: 'rgb(242, 242, 242)',
      bgImg: 'none',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      tClass: 'BB-One',
      flip: true
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      duration: nextProps.slide.duration,
      inAnimation: nextProps.slide.inAnimation,
      outAnimation: nextProps.slide.outAnimation,
      inEase: nextProps.slide.inEase,
      outEase: nextProps.slide.outEase,
      flip: !this.state.flip,
      //Copy props from new to current
      backgroundColor: this.props.slide.backgroundColor,
      bgImg: this.props.slide.bgImg,
      backgroundRepeat: this.props.slide.backgroundRepeat,
      backgroundPosition: this.props.slide.backgroundPosition,
      backgroundSize: this.props.slide.backgroundSize,
    });
  }

  render(){

    let blankStyle = {
      animation: 'none',
      background: 'none',
      display: 'none'
    };

    let newStyle = {
      animation: this.state.inAnimation + ' ' + this.state.duration + 's ' + this.state.inEase + ' forwards' + ' running',
      backgroundColor: this.props.slide.backgroundColor,
      backgroundImage: 'url(' + this.props.slide.bgImg + ')',
      backgroundRepeat: this.props.slide.backgroundRepeat,
      backgroundPosition: this.props.slide.backgroundPosition,
      backgroundSize: this.props.slide.backgroundSize,
    };

    let currentStyle = {
      animation: this.state.outAnimation + ' ' + this.state.duration + 's ' + this.state.outEase + ' forwards' + ' running',
      backgroundColor: this.state.backgroundColor,
      backgroundImage: 'url(' + this.state.bgImg + ')',
      backgroundRepeat: this.state.backgroundRepeat,
      backgroundPosition: this.state.backgroundPosition,
      backgroundSize: this.state.backgroundSize,
    };

    return(
      <div className="Backslide-Wrap">
        <div className={'Backslide-Slide'} style={currentStyle} ></div>
        <div id='gOne' className={'Backslide-Slide'} style={this.state.flip ? newStyle : blankStyle} ></div>
        <div id='gTwo' className={'Backslide-Slide'} style={this.state.flip ? blankStyle : newStyle} ></div>
      </div>
    )
  }
}
