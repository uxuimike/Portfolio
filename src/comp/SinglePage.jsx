import React, { Component } from 'react';
import * as feedActs from '../actions/feedActions';
import {connect} from 'react-redux';

@connect((store) => {
  return {
    page: store.feed.page,
    status: store.feed.status
  }
})

export default class SinglePage extends Component {

  componentDidMount(){
    this.loadPage();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id){
      this.loadPage();
    }
  }

  loadPage(){
    window.scrollTo(0, 0);
    this.props.dispatch(feedActs.getPage(this.props.id));
  };

  renderConditionalComponent() {
    if (this.props.status === 'Fulfilled'){
      return (
        <div className='Single-Page-Wrap'>
          <h1>{this.props.page.title}</h1>
          <p>{this.props.page.content}</p>
        </div>
      )
    }else if (this.props.status === 'Pending'){
      return(
        <div className='Single-Page-Wrap'>
          <p className='Single-Page-Error'>Loading...</p>
        </div>
      )
    }else {
      return(
          <div className='Single-Page-Wrap'>
            <p className='Single-Page-Error'>Ooops, didn't find the page you were looking for.  Maybe try a search.</p>
          </div>
        )
      }
  }


  render(){

    return(
      <div>
        {this.renderConditionalComponent()}
      </div>
    )
  }
}
