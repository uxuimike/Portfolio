import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import { IndexLink } from 'react-router'

@connect((store) => {
  return {
    view : store.view
  }
})

export default class Menu extends Component {

  constructor() {
    super();
    this.state = {
      open: ''
    }
  }

  onHamburger() {
    if (this.state.open === 'is-active'){
      this.setState({ open: '' });
    }else {
      this.setState({ open: 'is-active' });
    }
  }

  render(){


    return(
      <nav id='MainMenu' className={this.state.open}>
        <div className='burgerWrap'>
          <button className={'hamburger hamburger--squeeze ' +  this.state.open} type='button' onClick={this.onHamburger.bind(this)}>
            <span className='hamburger-box'>
              <span className='hamburger-inner' style={{backgroundColor: this.state.open === 'is-active' ? 'rgb(79, 79, 79)' : this.props.view.style.color}}></span>
            </span>
          </button>
        </div>
        <div id='MenuWrap'>
          <ul>
            <IndexLink to="/" onClick={this.onHamburger.bind(this)} activeClassName="active"><li>Home</li></IndexLink>
            <Link to="work" onClick={this.onHamburger.bind(this)} activeClassName="active"><li>Work</li></Link>
            <Link to="blog" onClick={this.onHamburger.bind(this)} activeClassName="active"><li>Blog</li></Link>
          </ul>
        </div>
      </nav>
    )
  }
}
