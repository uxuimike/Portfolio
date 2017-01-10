import React, { Component } from 'react';

export default class Blog extends Component {

  render(){
    const {query} = this.props.location;
    return(
      <div>
        <h1>This is BLOG</h1>
        <h3>Query: {query.prm}</h3>
      </div>
    )
  }
}
