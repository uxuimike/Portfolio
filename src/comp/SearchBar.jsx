import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.props.onSearchField(event.target.value);
    }
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  onClear(){
    this.setState({search: ''});
  }

  render(){

    return(
      <div className="SearchWrap">
        <div className='SearchField'>
          <input type='text' value={this.state.search} onChange={this.handleChange.bind(this)} placeholder='Search text or use a # to search for a tag'></input>
          <button className='SearchClear' onClick={this.onClear.bind(this)} style={{display: this.state.search.length > 0 ? 'block' : 'none'}}></button>
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  onSearchField: React.PropTypes.func.isRequired
};
