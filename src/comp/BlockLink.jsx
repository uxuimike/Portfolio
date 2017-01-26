import React, { Component } from 'react';
import {Link} from 'react-router';
import Arrow from './Arrow.jsx';

export default class BlockLink extends Component {

  render(){

    return(
      <Link className="Block Block-Link" to={this.props.linkTo.to}>
        <div className='Block-Link-Wrap'>
          <p>{this.props.linkTo.title}</p>
          <Arrow />
        </div>
      </Link>
    )
  }
}
