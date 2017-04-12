import React, { Component } from 'react';
import Block from './Block.jsx';
import {Link} from 'react-router';
import Arrow from './Arrow.jsx';

export default class BlocksSection extends Component {

  render(){

    let posts = this.props.posts;
    let blockList = posts.map((posts) =>
      <Block key={posts.id} category={posts.tag} title={posts.title} img={posts.img} slug={posts.slug}/>
    );

    return(

      <div className="Block-Wrap" >
        <div className="No-Results" style={{display: posts.length > 0 ? 'none' : 'block'}}>
          <p>No Results</p>
          <Link className="Go-To See-More-Img" to='work'>Go to Work <Arrow /></Link>
          <Link className="Go-To See-More-Img" to='blog'>Go to Blog <Arrow /></Link>
        </div>
        {blockList}
        <div className='clear'></div>
      </div>
    )
  }
}
