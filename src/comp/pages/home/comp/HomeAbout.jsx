import React, { Component } from 'react';
import {Link} from 'react-router';
import Arrow from '../../../Arrow.jsx';
import PageSection from '../../../PageSection.jsx';
import ContentDisplay from '../../../ContentDisplay.jsx';

export default class HomeAbout extends Component {

  render(){
    const bs = {
      duration: 0.6,
      outAnimation: 'none',
      inAnimation: 'Fade-In',
      inEase: 'ease-in',
      outEase: 'ease-out',
      style: {className: 'Home-About-BG', color: 'rgb(255, 255, 255)'}
    }

    return(
      <PageSection section='HomeAbout' classNames='HomeAbout' backslide={bs} adjustTop={0} adjustBottom={0}>
        <div className='Page-Height-Item'>
          <h2>{this.props.content.title}</h2>
          <ContentDisplay content={this.props.content.content} />
          <div className='clear'></div>
          <Link className="About-Links See-More-Img" to='work'>See The Work <Arrow /></Link>
          <Link className="About-Links See-More-Img" to='blog'>Read The Blog <Arrow /></Link>
        </div>
        <div className='clear'></div>
      </PageSection>
    )
  }
}

HomeAbout.defaultProps = {
  content: {}
};
