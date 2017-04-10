import React, { Component } from 'react';
import Blog from '../Blog.jsx';

export default class WorkPage extends Component {

  render(){

    return(
      <Blog title='Work' category='work' location={this.props.location}/>
    )
  }

}
