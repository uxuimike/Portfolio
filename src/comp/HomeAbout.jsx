import React, { Component } from 'react';
import {Link} from 'react-router';
import moreImg from '../img/more.svg';
import Arrow from './Arrow.jsx';
import PageSection from './PageSection.jsx'

export default class HomeAbout extends Component {

  render(){
    const bs = {
      duration: 0.6,
      outAnimation: 'none',
      inAnimation: 'Fade-In',
      inEase: 'ease-in',
      outEase: 'ease-out',
      backgroundColor: 'rgb(128, 128, 128)',
      bgImg: 'none',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }

    return(
      <PageSection backslide={bs} adjustTop={0} adjustBottom={0}>
        <div className='Page-Height-Item'>
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat luctus malesuada. Morbi ullamcorper dui quis leo posuere efficitur.
          Integer scelerisque risus est, nec sollicitudin dolor porttitor et. Suspendisse potenti. Maecenas in laoreet massa. Aenean porttitor dui purus,
          vitae pretium massa facilisis suscipit. Nulla blandit lorem tellus, a consectetur lacus elementum eu. Vivamus ac mollis dolor, et lobortis lectus.
          Quisque a aliquam nisl. Vestibulum tristique mattis feugiat. Praesent a massa at ligula pulvinar rutrum at facilisis est. Nullam hendrerit euismod
          justo eu efficitur. Donec lobortis urna velit, nec varius eros aliquam non. Nunc quis enim efficitur, ullamcorper ipsum quis, rutrum sem.</p>
        <Link className='See-More-Img' to="blog">See More <Arrow /></Link>
        </div>
      </PageSection>
    )
  }
}
