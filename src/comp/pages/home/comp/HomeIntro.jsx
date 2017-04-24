import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageSection from '../../../PageSection.jsx'
import scroll from '../../../../img/scroll-down.svg';
import ContentDisplay from '../../../ContentDisplay.jsx';

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
      duration: 0.6,
      outAnimation: 'none',
      inAnimation: 'Fade-In',
      inEase: 'ease-in',
      outEase: 'ease-out',
      style: {className: 'Home-Intro-BG', color: 'rgb(79, 79, 79)'}
    }

    this.fs = 62.5;

  }

  componentDidMount(){
   this.onHeight(this.props.view.height);
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

  onClick(){
    this.scrollToY(2000, 20, 'easeOutSine');
  }

  scrollToY(scrollTargetY, speed, easing) {

      var scrollY = window.scrollY,
          currentTime = 0;

      var time = 1.5;

      var easingEquations = {
          easeOutSine: function (pos) {
              return Math.sin(pos * (Math.PI / 2));
          }
      };

      function tick() {
          currentTime += 1 / 60;

          var p = currentTime / time;
          var t = easingEquations[easing](p);

          if (p < 1) {
              requestAnimationFrame(tick);
              window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
          } else {
              window.scrollTo(0, scrollTargetY);
          }
      }

      // call it once to get started
      tick();
  }

  render(){

    return(
      <PageSection section='HomeIntro' classNames='Page-Height HomeIntro' backslide={this.bs} adjustTop={-100} adjustBottom={-500} >
        <div className='Home-Intro-Text' style={{fontSize: this.state.fSize + '%', marginTop: this.state.mTop + 'px'}}>
          <h1>{this.props.content.title}</h1>
          <ContentDisplay content={this.props.content.content} />
          <div onClick={this.onClick.bind(this)}>
            <img src={scroll} className={'Scroll-Down ' + (this.props.view.scroll < 5 ? '' : 'Scroll-Down-Hide')} alt='Arrow'></img>
          </div>
        </div>
      </PageSection>
    )
  }
}

HomeIntro.defaultProps = {
  content: {}
};
