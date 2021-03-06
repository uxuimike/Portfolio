import React, { Component } from 'react';
import {connect} from 'react-redux';
import Menu from './Menu.jsx';
import Contact from './Contact.jsx';

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
      height: 1080,
      arrowUp: 0,
      arrowDown: 0,
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
    this.sp = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    //Set how often we want onScroll to dispatch
    if (this.sp > this.props.scrollPos + 10 || this.sp < this.props.scrollPos - 10) {
      this.props.dispatch(viewActs.setScroll(this.sp));
    }
  }

  render(){
    return(
      <div className="App">
        <Menu />
        {this.props.children}
        <Contact />
      </div>
    )
  }
}
