import React, { Component } from 'react';
import Blog from '../Blog.jsx';

export default class BlogPage extends Component {

  render(){

    return(
      <Blog title='Blog' category='blog' location={this.props.location}/>
    )
  }

}
