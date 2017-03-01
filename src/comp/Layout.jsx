import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as viewActs from '../actions/viewActions';

@connect((store) => {
    return {
        scrollPos : store.view.scroll
    }
})

export default class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      device: "mobile",
      orientation: "portrait",
      width: 960,
      height: 1080
    };

    this.onResize = this.onResize.bind(this);
    this.onScroll = this.onScroll.bind(this);

  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    window.addEventListener("scroll", this.onScroll);
    this.onResize();
    this.onScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener("scroll", this.onScroll);
  }

  onResize(){
    this.props.dispatch(viewActs.setSize(window.innerWidth, window.innerHeight));
  }

  onScroll(){
    this.sp = document.body.scrollTop;
    //Set how often we want onScroll to dispatch
    if (this.sp > this.props.scrollPos + 10 || this.sp < this.props.scrollPos - 10) {
      this.props.dispatch(viewActs.setScroll(document.body.scrollTop));
    }

  }

  render(){
    return(
      <div className="App">
        {this.props.children}
      </div>
    )
  }
}
