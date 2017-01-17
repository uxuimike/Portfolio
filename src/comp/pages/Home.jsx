import React, { Component } from 'react';
import Intro from '../Intro.jsx';
import HomeAbout from '../HomeAbout.jsx';
import BlocksSection from '../BlocksSection.jsx';

export default class Home extends Component {
  render(){
    let linkTo = {
      tilte: "See All",
      to: "work"
    }

    return(
      <div>
        <Intro />
        <HomeAbout />
        <BlocksSection title='Selected Work' linkTo={linkTo}/>
        <BlocksSection title='Blog'/>
      </div>
    )
  }
}
