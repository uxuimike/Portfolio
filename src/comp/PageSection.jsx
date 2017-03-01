import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as viewActs from '../actions/viewActions';

@connect((store) => {
    return {
        view : store.view
    }
})

export default class PageSection extends Component {

  constructor() {
    super();
    this.comp = null;
  }

  componentDidMount() {
    this.comp = this.refs.container;
    this.regSection();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.view.height !== this.props.view.height){
      this.regSection();
    }
  }

  regSection(){
    this.props.dispatch(viewActs.regSection(this.comp.offsetTop, this.props.section, this.props.backslide));
  }

  render(){

    return(
      <section className={this.props.classNames} ref="container">
        {this.props.children}
      </section>
    )
  }
}

PageSection.defaultProps = {
  adjustTop: 0,
  adjustBottom: 0
};
