import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import SinglePage from './SinglePage.jsx';
import Sort from './Sort.jsx';
import Arrow from './Arrow.jsx';
import BlockSection from './BlockSection.jsx'
import {connect} from 'react-redux';
import * as viewActs from '../actions/viewActions';
import * as feedActs from '../actions/feedActions';
import {hashHistory} from "react-router";

@connect((store) => {
    return {
        feed : store.feed
    }
})

export default class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: '',
      sortOn: 'date',
      sortBy: 'DESC',
      ascTitle: 'Oldest first',
      desTitle: 'Newest first',
      singlePage: false
    }
  }

  componentDidMount(){

    this.props.dispatch(
      viewActs.setStyle(
        {className: 'Blog-BG', color: 'rgb(79, 79, 79)'},
        null
      )
    );

    this.setState({
      category: this.props.location.pathname.replace('/', '')
    });

    if (this.props.location.search.length > 0){
      this.setState({singlePage: true});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      if (this.props.location.search.length > 0){
        this.setState({singlePage: true});
      }else {
        this.setState({singlePage: false});
      }
    }

    if (prevProps.location.pathname !== this.props.location.pathname) {
        this.setState({
          category: this.props.location.pathname.replace('/', '')
        });
    }

    if (
      prevState.category !== this.state.category ||
      prevState.sortOn !== this.state.sortOn ||
      prevState.sortBy !== this.state.sortBy
    ) {
      this.loadFeed();
    }


  }

  loadFeed(){
    window.scrollTo(0, 0);
    this.props.dispatch(
      feedActs.getFeed('order_by=' + this.state.sortOn + '&order=' + this.state.sortBy + '&category=' + this.state.category )
    );
  }

  onSort(on, by, cat){
    if (cat) {
      this.setState({category: cat, sortOn: on, sortBy: by});
    }else {
      this.setState({sortOn: on, sortBy: by});
    }
  }

  onBack(){
    hashHistory.goBack();
  }

  renderConditionalComponent() {
    if (this.state.singlePage){
      return <SinglePage id={this.props.location.search.replace('?', '')}/>
    }else {
      return(
        <div>
          <Sort onSort={this.onSort.bind(this)} category={this.state.category}/>
          <BlockSection posts={this.props.feed.posts} />
        </div>
      )
    }
  }

  render(){

    return(

      <div>
        <SearchBar />
        <a onClick={this.onBack.bind(this)} className='Back-Link See-More-Img-Back'><Arrow /> Back</a>
        {this.renderConditionalComponent()}
      </div>
    )
  }
}

Blog.propTypes = {
  location: React.PropTypes.object.isRequired
};
