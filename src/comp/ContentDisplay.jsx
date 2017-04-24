import React, { Component } from 'react';
import DOMPurify from 'dompurify'

export default class ContentDisplay extends Component {

  createMarkup(mark) {
    var clean;
    var dirty = mark.replace(/<!--yt(.*)yt-->/g, this.comentToBrackets);
    clean = DOMPurify.sanitize(dirty);
    var markedUp = clean.replace(/{yt(.*)yt}/g, this.buildYoutube);
    return {__html: markedUp};
  }

  comentToBrackets(m, p1){
    return '{yt' + DOMPurify.sanitize(p1.trim()) + 'yt}';
  }

  buildYoutube (match, p1){
    return '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + p1.trim() + '" frameborder="0" allowfullscreen></iframe>';
  }

  render(){

    return(
      <div dangerouslySetInnerHTML={this.createMarkup(this.props.content)} />
    )
  }

}

ContentDisplay.defaultProps = {
  content: '',
};
