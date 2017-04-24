import React, { Component } from 'react';

export default class Sort extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sortOn: 'date',
      sortBy: 'DESC',
      ascTitle: 'Oldest first',
      desTitle: 'Newest first',
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortOn !== this.state.sortOn || prevState.sortBy !== this.state.sortBy) {
      this.props.onSort(this.state.sortOn, this.state.sortBy);
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

  onType(e){
    //this.setState({category: e.target.value});
    this.props.onSort(this.state.sortOn, this.state.sortBy, e.target.value, );
  }

  render(){

    return(
      <div className='Blog-Sort-Wrap'>
        <div className='sortBy'>
          <select value={this.props.category} onChange={this.onType.bind(this)} className='Blog-Type'>
            <option value='blog'>Blog</option>
            <option value='work'>Work</option>
          </select>
          <label>Sorted On:</label>
          <select value={this.state.sortOn} onChange={this.onSortOn.bind(this)} className='Sort-Select'>
            <option value='date'>Date</option>
            <option value='title'>Title</option>
          </select>
          <label>By:</label>
          <select value={this.state.sortBy} onChange={this.onSortBy.bind(this)} className='Sort-Select'>
            <option value='ASC'>{this.state.ascTitle}</option>
            <option value='DESC'>{this.state.desTitle}</option>
          </select>
          <div className='clear'></div>
        </div>
        <div className='clear'></div>
      </div>
    )
  }

}
