import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageSection from './PageSection.jsx'
import uxui from '../img/uxui.svg';
import scroll from '../img/scroll-down.svg';

import * as backslideActs from '../actions/backslideActions';

@connect((store) => {
    return {
        view : store.view
    }
})

export default class Intro extends Component {
  constructor() {
    super();
    this.state = {
      fSize: 62.5,
    }

  }

  componentWillReceiveProps(nextProps) {
    //TODO Put in a check to prevent uncessary calls
    if (nextProps.view.height < 700){
      this.setState({ fSize: nextProps.view.height/11.2  });
    }else {
      this.setState({ fSize: 62.5 });
    }
  }

  render(){

    const bs = {
      duration: 0.6,
      outAnimation: 'none',
      inAnimation: 'Fade-In',
      inEase: 'ease-in',
      outEase: 'ease-out',
      backgroundColor: 'rgb(204, 204, 251)',
      bgImg: 'none',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }

    return(
      <PageSection backslide={bs} classNames="Home-Intro" adjustTop={-100} adjustBottom={0}>
        <img src={uxui} className="Home-Intro-Img" alt='UX/UI'></img>
        <div className='Home-Intro-Text' style={{fontSize: this.state.fSize + '%'}}>
          <h1>Mike Nichols</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl erat, aliquet et pretium eu, fringilla vel nisl.
            Proin condimentum pretium vestibulum.
          </p>
          <img src={scroll} className='Scroll-Down' alt='Arrow'></img>
        </div>
      </PageSection>
    )
  }
}
