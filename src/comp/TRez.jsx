import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as userActs from '../actions/userActions';
import * as tweetActs from '../actions/tweetsActions';

@connect((store) => {
    return {
        user : store.users.user,
        viewSize : store.view
    }
})

export default class TRez extends Component {

  constructor() {
    super();
    this.state = {
      isBig: 'Yes'
    }
  }

  componentWillReceiveProps(nextProps) {
  // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.viewSize !== this.state.viewSize) {
      if (nextProps.viewSize.width > 1000){
        this.setState({ isBig: "Yes" });
      }else {
        this.setState({ isBig: "No" });
      }
    }
  }

  onNavigate(){
    this.props.router.push('/blog?prm=howdy-hey');
  }

  onSetUser() {
    this.props.dispatch(userActs.setUserName("Juandrew"));
  }

  onFetch() {
    this.props.dispatch(tweetActs.fetchTweets());
  }

  render(){
    let halfWidth = this.props.viewSize.width/2;

    const divStyle = {
      backgroundColor: '#00F'
    };

    return(
      <div>
        <div style={Object.assign({}, {width: halfWidth + 'px'}, divStyle)}>Mike Nichols</div>
        <p>{this.props.viewSize.width} Is it big?  {this.state.isBig}</p>
        <button onClick={this.onNavigate.bind(this)}>Howdy Hey</button>
        <button onClick={this.onSetUser.bind(this)}>Set User</button>
        <button onClick={this.onFetch.bind(this)}>Fetch</button>
        <button onClick={this.onResize.bind(this)}>Size</button>
        <h4>User: {this.props.user.name}</h4>
        <Link to="/"><button>Home</button></Link>
        <Link to="work"><button>Work</button></Link>
        <Link to="blog"><button>Blog</button></Link>
      </div>
    )
  }
}
