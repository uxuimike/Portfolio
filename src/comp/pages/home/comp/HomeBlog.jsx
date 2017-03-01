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
      style: {className: 'Home-Blog-BG', color: 'rgb(79, 79, 79)', border: 'solid 1px rgb(251, 108, 104)'}
    }

    return(
      <PageSection section='HomeBlog' classNames='Block-Section' backslide={bs} adjustTop={0} adjustBottom={0}>
        <div className='Page-Height-Title'>
          <h2 style={{borderBottom: this.props.borderBottom}}>BLOG</h2>
        </div>
          <div className="Block-Wrap">
            <Block category='#UX Design' title='Example Title'/>
            <Block category='#UX Design' title='Example Title'/>
            <Block category='#UX Design' title='Example of what happens if this has a really long title'/>
            <Block category='#UX Design' title='Example Title'/>
            <Block  title='Example Title'/>
            <BlockLink linkTo='work' />
            <div className='clear'></div>
          </div>
      </PageSection>
    )
  }
}
