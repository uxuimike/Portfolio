import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as viewActs from '../actions/viewActions';

@connect((store) => {
    return {
        slide : store.backslide,
        view: store.view
    }
})

export default class BackslideStyle extends Component {

  constructor() {
    super();

    this.state = {
      duration: 2,
      inAnimation: 'none',
      outAnimation: 'none',
      inEase: 'linear',
      outEase: 'linear',
      pStyle: '',
      style: '',
      flip: true,
      sections: [],
      activeSection: ''
    }
  }

  componentDidMount() {
    this.setState({
      style: this.props.defaultStyle
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.view.scroll !== this.props.view.scroll){
      this.onScroll(nextProps.view.scroll);
    }
  }

  onScroll(scroll) {
    for (let i=0; i < this.props.view.sections.length; i++){
      if(scroll > this.props.view.sections[i].offset - this.props.view.height + 100){
        if (this.props.view.sections[i].section !== this.state.activeSection){
          this.setState({
            activeSection: this.props.view.sections[i].section,
            duration: this.props.view.sections[i].slide.duration,
            inAnimation: this.props.view.sections[i].slide.inAnimation,
            outAnimation: this.props.view.sections[i].slide.outAnimation,
            inEase: this.props.view.sections[i].slide.inEase,
            outEase: this.props.view.sections[i].slide.outEase,
            flip: !this.state.flip,
            pStyle: this.state.style,
            style: this.props.view.sections[i].slide.style.className
          });
          this.props.dispatch(
            viewActs.setStyle(
              this.props.view.sections[i].slide.style,
              this.props.view.sections[i].section
           )
         );
        }
        break;
      }
    }
  }

  render(){

    let blankStyle = {
      animation: 'none',
      background: 'none',
      display: 'none'
    };

    let newStyle = {
      animation: this.state.inAnimation + ' ' + this.state.duration + 's ' + this.state.inEase + ' forwards running',
    };

    let currentStyle = {
      animation: this.state.outAnimation + ' ' + this.state.duration + 's ' + this.state.outEase + ' forwards running',
    };

    return(
      <div className="Backslide-Wrap">
        <div className={'Backslide-Slide ' + this.state.pStyle} style={currentStyle} ></div>
        <div id='gOne' className={'Backslide-Slide ' + this.state.style } style={this.state.flip ? newStyle : blankStyle} ></div>
        <div id='gTwo' className={'Backslide-Slide ' + this.state.style} style={this.state.flip ? blankStyle : newStyle} ></div>
      </div>
    )
  }
}
