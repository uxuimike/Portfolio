import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import * as userActs from '../actions/userActions';
import * as tweetActs from '../actions/tweetsActions';
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


  onResize(number){
    this.props.dispatch(viewActs.sizeChange(6969, 101));
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
    return(
      <div className="App">
        {this.props.children}
        <button onClick={this.onNavigate.bind(this)}>Howdy Hey</button>
        <button onClick={this.onSetUser.bind(this)}>Set User</button>
        <button onClick={this.onFetch.bind(this)}>Fetch</button>
        <button onClick={this.onResize.bind(this)}>Size</button>
        <h4>User: {this.props.user.name}</h4>
        <Link to=""><button>Home</button></Link>
        <Link to="work"><button>Work</button></Link>
        <Link to="blog"><button>Blog</button></Link>
      </div>
    )
  }
}
