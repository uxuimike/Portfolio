import React, { Component } from 'react';
import * as feedActs from '../actions/feedActions';
import {connect} from 'react-redux';

@connect((store) => {
  return {
    page: store.feed,
  }
})

export default class SinglePage extends Component {

  componentDidMount(){
    this.loadPage();
  };

  loadPage(){
    this.props.dispatch(feedActs.getPage('58'));
  };

  render(){

    return(

      <div>
        <h1>Single {this.props.display}</h1>
        <p>{this.props.id}</p>
      </div>
    )
  }
}
