import React, { Component } from 'react';
import {Link} from 'react-router';
import Arrow from '../../../Arrow.jsx';
import PageSection from '../../../PageSection.jsx'

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
      <PageSection section='HomeAbout' classNames='Page-Height HomeAbout' backslide={bs} adjustTop={-500} adjustBottom={0}>
        <div className='Page-Height-Item'>
          <h2>{this.props.content.title}</h2>
          <p>{this.props.content.content}</p>
        <Link className='See-More-Img' to="blog">See More <Arrow /></Link>
        </div>
      </PageSection>
    )
  }
}

HomeAbout.defaultProps = {
  content: {}
};
