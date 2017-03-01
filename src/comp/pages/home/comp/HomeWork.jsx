import React, { Component } from 'react';
import Block from '../../../Block.jsx';
import BlockLink from '../../../BlockLink.jsx';
import PageSection from '../../../PageSection.jsx'

export default class HomeWork extends Component {

  render(){

    const bs = {
      duration: 0.6,
      outAnimation: 'none',
      inAnimation: 'Fade-In',
      inEase: 'ease-in',
      outEase: 'ease-out',
      style: {className: 'Home-Work-BG', color: 'rgb(242, 242, 242)', border: 'solid 1px rgb(0, 255, 0)'}
    }

    return(
      <PageSection section='HomeWork' classNames='Block-Section' backslide={bs} adjustTop={0} adjustBottom={0}>
        <div className='Page-Height-Title'>
          <h2 style={{borderBottom: this.props.borderBottom}}>Work</h2>
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
