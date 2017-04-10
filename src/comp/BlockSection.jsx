import React, { Component } from 'react';
import Block from './Block.jsx';

export default class BlocksSection extends Component {

  render(){

    let posts = this.props.posts;
    let blockList = posts.map((posts) =>
      <Block key={posts.id} category={posts.tag} title={posts.title} img={posts.img}/>
    );

    return(

      <div className="Block-Wrap" >
        <div className="No-Results" style={{display: posts.length > 0 ? 'none' : 'block'}}>No Results</div>
        {blockList}
        <div className='clear'></div>
      </div>
    )
  }
}
