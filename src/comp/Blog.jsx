import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import SinglePage from './SinglePage.jsx';
import Sort from './Sort.jsx';
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
      search: '',
      category: 'blog',
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

    if (this.props.location.search.length > 0){
      this.setState({singlePage: true});
    }else {
      this.loadFeed();
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search || prevState.sortOn !== this.state.sortOn || prevState.sortBy !== this.state.sortBy) {
      this.loadFeed();
    }

    if (prevProps.location.pathname.replace('/', '') !== this.props.location.pathname.replace('/', '')) {
      if (this.props.location.pathname.replace('/', '') !== 'search'){
        this.setState({search: ''});
      }
      this.loadFeed();
    }

    if (prevProps.location.search !== this.props.location.search) {
      if (this.props.location.search.length > 0){
        this.setState({singlePage: true});
      }else {
        this.setState({singlePage: false});
      }
    }

  }

  loadFeed(){
    window.scrollTo(0, 0);
    if (this.state.search.length > 0){
      var hashI = this.state.search.indexOf('#');
      if (hashI > -1){
        var hash = this.state.search.slice(hashI + 1, this.state.search.length);
        this.props.dispatch(feedActs.getFeed('order_by=' + this.state.sortOn + '&order=' + this.state.sortBy + '&tag=' + hash));
      }else {
        this.props.dispatch(feedActs.getFeed('order_by=' + this.state.sortOn + '&order=' + this.state.sortBy + '&search=' + this.state.search ));
      }
    }else {
      this.props.dispatch(feedActs.getFeed('order_by=' + this.state.sortOn + '&order=' + this.state.sortBy + '&category=' + this.props.location.pathname.replace('/', '')));
    }
  }

  onSort(on, by){
    this.setState({sortOn: on, sortBy: by});
  }

  onSearchField(search){
    this.setState({
      search: search
    });
    hashHistory.push('search');
  }

  renderConditionalComponent() {
    if (this.state.singlePage){
      return <SinglePage id={this.props.location.search.replace('?', '')}/>
    }else {
      return(
        <div>
          <Sort onSort={this.onSort.bind(this)} />
          <BlockSection posts={this.props.feed.posts} />
        </div>
      )
    }
  }

  render(){

    return(

      <div>
        <SearchBar onSearchField={this.onSearchField.bind(this)} />
        {this.renderConditionalComponent()}
      </div>
    )
  }
}

Blog.propTypes = {
  location: React.PropTypes.object.isRequired
};
