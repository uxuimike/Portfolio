import React, { Component } from 'react';
import Block from '../../../Block.jsx';
import BlockLink from '../../../BlockLink.jsx';
import PageSection from '../../../PageSection.jsx'

export default class HomeBlog extends Component {

  render(){

    const bs = {
      duration: 0.6,
      outAnimation: 'none',
      inAnimation: 'Fade-In',
      inEase: 'ease-in',
      outEase: 'ease-out',
      style: {className: 'Home-Blog-BG', color: 'rgb(251, 251, 251)'}
    }

    let posts = this.props.posts;
    let blockList = posts.map((posts) =>
      <Block key={posts.ID} category={posts.tag} title={posts.title} img={posts.img}/>
    );

    return(
      <PageSection section='HomeBlog' classNames='Block-Section-Blog' backslide={bs} adjustTop={0} adjustBottom={0}>
        <div className='Page-Height-Title'>
          <h2>BLOG</h2>
        </div>
          <div className="Block-Wrap">
            {blockList}
            <BlockLink linkTo='work' />
            <div className='clear'></div>
          </div>
      </PageSection>
    )
  }
}
