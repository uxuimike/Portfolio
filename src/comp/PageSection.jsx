import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as backslideActs from '../actions/backslideActions';

@connect((store) => {
    return {
        view : store.view
    }
})

export default class PageSection extends Component {

  constructor() {
    super();
    this.state = {
      outsideSection: true
    }
    this.comp = null;
  }

  componentDidMount() {
    this.comp = this.refs.container;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.view.scroll) {
      this.checkScroll(nextProps);
    }
  }

  checkScroll(np){
    if (np.view.scroll > this.comp.offsetTop + this.props.adjustTop &&
      np.view.scroll < this.comp.offsetTop + this.comp.offsetHeight + this.props.adjustBottom) {
      if (this.state.outsideSection) {
        this.setState({outsideSection: false});
        this.inSection();
      }
    }else {
      this.setState({outsideSection: true});
    }
  }

  inSection() {
    this.props.dispatch(backslideActs.setBg(this.props.backslide));
  }

  render(){

    return(
      <div id='PSComp' className={'Page-Height ' + this.props.classNames} ref="container">
        {this.props.children}
      </div>
    )
  }
}

PageSection.defaultProps = {
  adjustTop: 0,
  adjustBottom: 0
};
