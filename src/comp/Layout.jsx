import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as viewActs from '../actions/viewActions';

@connect((store) => {
    return {
        user : store.users.user,
        userFetched : store.users.fetched,
        tweets: store.tweets.tweets
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
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize.bind(this));
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.onResize.bind(this));
  }

  onResize(number){
    this.props.dispatch(viewActs.sizeChange(window.innerWidth, window.innerHeight));
  }

  render(){
    return(
      <div className="App">
        {this.props.children}
      </div>
    )
  }
}
