import React, { Component } from 'react';
import {connect} from 'react-redux';

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

  render(){
    let halfWidth = this.props.viewSize.width/2;

    const divStyle = {
      backgroundColor: '#00F'
    };

    return(
      <div>
        <div style={Object.assign({}, {width: halfWidth + 'px'}, divStyle)}>Mike Nichols</div>
        <p>{this.props.viewSize.width} Is it big?  {this.state.isBig}</p>
      </div>
    )
  }
}
