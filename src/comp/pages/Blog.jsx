import React, { Component } from 'react';
import SearchBar from '../SearchBar.jsx';
import Block from '../Block.jsx';
import BlockLink from '../BlockLink.jsx';
import {connect} from 'react-redux';
import * as feedActs from '../../actions/feedActions';

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
      sortOn: 'date',
      sortBy: 'DESC',
      ascTitle: 'Oldest first',
      desTitle: 'Newest first'
    }
  }

  componentDidMount() {
    //this.loadFeed();
  }

  componentDidUpdate(prevProps, prevState) {
    //this.loadFeed();
    if (prevState.search !== this.state.search || prevState.sortOn !== this.state.sortOn || prevState.sortBy !== this.state.sortBy) {
      this.loadFeed();
    }
  }

  loadFeed(){
    if (this.state.search.length > 0){
      var hashI = this.state.search.indexOf('#');
      if (hashI > -1){
        var hash = this.state.search.slice(hashI + 1, this.state.search.length);
        this.props.dispatch(feedActs.getFeed('order_by=' + this.state.sortOn + '&order=' + this.state.sortBy + '&tag=' + hash));
      }else {
        this.props.dispatch(feedActs.getFeed('order_by=' + this.state.sortOn + '&order=' + this.state.sortBy + '&search=' + this.state.search ));
      }
    }else {
      this.props.dispatch(feedActs.getFeed('order_by=' + this.state.sortOn + '&order=' + this.state.sortBy));
    }
  }

  onSortOn(e){
    if (e.target.value === 'title') {
      this.setState({sortOn: e.target.value, sortBy: 'ASC', ascTitle: 'A-Z', desTitle: 'Z-A'});
      //this.loadFeed(e.target.value, 'ASC');
    }else {
      this.setState({sortOn: e.target.value, ascTitle: 'Oldest first', desTitle: 'Newest first'});
      //this.loadFeed(e.target.value, null);
    }
  }

  onSortBy(e){
    this.setState({sortBy: e.target.value});
    //this.loadFeed(null, e.target.value);
  }

  onSearchField(search){
    this.setState({search: search});
  }


  render(){
      let posts = this.props.feed.posts;
      let blockList = posts.map((posts) =>
        <Block key={posts.id} category={posts.tag} title={posts.title} img={posts.img}/>
      );

    return(

      <div>
        <SearchBar onSearchField={this.onSearchField.bind(this)}/>
        <div className='sortBy'>
          <label>Sort On:</label>
          <select value={this.state.sortOn} onChange={this.onSortOn.bind(this)}>
            <option value='date'>Date</option>
            <option value='title'>Title</option>
          </select>
          <label>By:</label>
          <select value={this.state.sortBy} onChange={this.onSortBy.bind(this)}>
            <option value='ASC'>{this.state.ascTitle}</option>
            <option value='DESC'>{this.state.desTitle}</option>
          </select>
        </div>
        <div className="Block-Wrap">
          <div className="No-Results" style={{display: posts.length > 0 ? 'none' : 'block'}}>No Results</div>
          {blockList}
          <div className='clear'></div>
        </div>
        <div className='Block-Footer'></div>
      </div>
    )
  }
}
