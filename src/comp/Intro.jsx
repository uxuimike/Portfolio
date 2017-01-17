import React, { Component } from 'react';
import uxui from '../img/uxui.svg';
import scroll from '../img/scroll-down.svg';
import {connect} from 'react-redux';

@connect((store) => {
    return {
        user : store.users.user,
        viewSize : store.view
    }
})

export default class Intro extends Component {
  constructor() {
    super();
    this.state = {
      fSize: 62.5
    }
  }

  componentWillReceiveProps(nextProps) {
  // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.viewSize !== this.state.viewSize) {
      if (nextProps.viewSize.height < 700){
        this.setState({ fSize: nextProps.viewSize.height/11.2  });
      }else {
        this.setState({ fSize: 62.5 });
      }
    }
  }

  render(){

    return(
      //<div className='Home-Intro' style={{fontSize: fSize + '%'}}>
      <div className='Home-Intro Page-Height'>
        <img src={uxui} className="Home-Intro-Img" alt='UX/UI'></img>
        <div className='Home-Intro-Text' style={{fontSize: this.state.fSize + '%'}}>
          <h1>Mike Nichols</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl erat, aliquet et pretium eu, fringilla vel nisl.
            Proin condimentum pretium vestibulum.
          </p>
          <img src={scroll} className='Scroll-Down' alt='Arrow'></img>
        </div>
      </div>
    )
  }
}
