import React, { Component } from 'react';
import {Link} from 'react-router';

export default class SearchList extends Component {

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
      <Link
        onClick={this.props.click}
        to={"blog?" + this.props.slug}
        className={'List-Item ' + (this.props.highlight === this.props.id ? 'List-Highlight' : '') }

      >
        <div className='List-Img' style={{backgroundImage: 'url(' + this.props.img + ')'}} ></div>
        <div className='List-Info'>
          <div  className='List-Info-Title'>{this.props.title}</div>
          <div className='List-Info-Category'>{this.props.category}</div>
        </div>
        <div className='clear'></div>
      </Link>
    )
  }
}
