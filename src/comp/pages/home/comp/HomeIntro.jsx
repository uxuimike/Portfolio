import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageSection from '../../../PageSection.jsx'
import scroll from '../../../../img/scroll-down.svg';

@connect((store) => {
    return {
        view : store.view
    }
})

export default class HomeIntro extends Component {
  constructor() {
    super();
    this.state = {
      fSize: 62.5,
      mTop: 450
    }

    this.bs = {
      duration: .6,
      outAnimation: 'none',
      inAnimation: 'Fade-In',
      inEase: 'ease-in',
      outEase: 'ease-out',
      style: {className: 'Home-Intro-BG', color: 'rgb(79, 79, 79)', border: 'solid 1px rgb(251, 108, 104)'}
    }

    this.fs = 62.5;

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.view.height !== this.props.view.height){
      this.onHeight(nextProps.view.height);
    }
  }

  onHeight(h){
    if (h < 800){
      this.fs = h/12.8;
    }else {
      this.fs =  62.5;
    }

    this.setState({
      fSize: this.fs,
      mTop: h/1.9
    })

  }

  render(){

    return(
      <PageSection section='HomeIntro' classNames='Page-Height Home-Intro' backslide={this.bs} adjustTop={-100} adjustBottom={-500} >
        <div className='Home-Intro-Text' style={{fontSize: this.state.fSize + '%', marginTop: this.state.mTop + 'px'}}>
          <h1 style={{borderBottom: this.props.borderBottom}}>Mike Nichols</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl erat, aliquet et pretium eu, fringilla vel nisl.
            Proin condimentum pretium vestibulum. {this.props.view.scroll}
          </p>
          <img src={scroll} className={'Scroll-Down ' + (this.props.view.scroll < 5 ? '' : 'Scroll-Down-Hide')} alt='Arrow'></img>
        </div>
      </PageSection>
    )
  }
}
