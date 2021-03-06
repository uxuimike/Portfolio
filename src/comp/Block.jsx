import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Block extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titleTooLong: false
    }
  }

  componentWillMount() {
    if(this.props.title.length > 30) {
      this.setState({ titleTooLong: true });
    }
  }

  render(){

    return(
      <Link to={"blog?" + this.props.slug}  className="Block" >
        <div className='Block-Img' style={{backgroundImage: 'url(' + this.props.img + ')'}} ></div>
        <div className='Block-Info'>
          <div className='Block-Info-Category'>{this.props.category}</div>
          <div  className={this.state.titleTooLong ? 'Block-Info-Title-Small' : 'Block-Info-Title'}>{this.props.title}</div>
        </div>
      </Link>
    )
  }
}
