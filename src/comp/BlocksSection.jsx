import React, { Component } from 'react';
import Block from './Block.jsx';
import BlockLink from './BlockLink.jsx';

export default class BlocksSection extends Component {

  render(){

    return(
      <section className='Page-Height'>
        <div className='Page-Height-Title'>
          <h2>{this.props.title}</h2>
        </div>
          <div className="Block-Wrap">
            <Block category='#UX Design' title='Example Title'/>
            <Block category='#UX Design' title='Example Title'/>
            <Block category='#UX Design' title='Example of what happens if this has a really long title'/>
            <Block category='#UX Design' title='Example Title'/>
            <Block  title='Example Title'/>
            {this.props.linkTo && <BlockLink />}
          </div>
      </section>
    )
  }
}
