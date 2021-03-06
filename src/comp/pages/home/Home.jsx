import React, { Component } from 'react';
import HomeIntro from './comp/HomeIntro.jsx';
import HomeAbout from './comp/HomeAbout.jsx';
import Backslide from '../../Backslide.jsx'

import {connect} from 'react-redux';
import * as viewActs from '../../../actions/viewActions';
import * as feedActs from '../../../actions/feedActions';


@connect((store) => {
    return {
        view: store.view,
        feed: store.feed,
        content: store.feed.content
    }
})

export default class Home extends Component {

  componentDidMount(){
    window.scrollTo(0, 0);

    this.props.dispatch(
      viewActs.setStyle(
        {className: 'Home-Intro-BG', color: 'rgb(79, 79, 79)'},
        null
     )
   );
   this.loadFeed();
  }

  loadFeed(){
    if (this.props.feed.featuredWork.length < 1 || this.props.feed.featuredBlog.length < 1){
      this.props.dispatch(feedActs.getHome());
    }
  }
  render(){
    return(
      <div id='HomePage' className={'Page-Wrap active' + this.props.view.activeSection}>
        <HomeIntro content={this.props.content.homeintro}/>
        <HomeAbout content={this.props.content.homeabout} />
        <Backslide defaultStyle='Home-Intro-BG'/>
      </div>
    )
  }
}
