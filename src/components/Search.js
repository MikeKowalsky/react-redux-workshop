import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props)
     this.onUserClick = this.onUserClick.bind(this)
  }

  state = {
    userName: ''
  }

  onInputChange (userName) {
    this.setState({userName})
  }

  onUserClick(){
    console.log('hello')
    console.log(this.state.userName)
  }

  render() {
    return (
      <div>
        <input 
          placeholder="Enter a GitHub User's name"
          value={this.state.userName}
          onChange={event => this.onInputChange(event.target.value)}
          type='text'/>
        <button
          onClick={this.onUserClick}
          type='submit'>
          Search
        </button>
      </div>
    );
  }
}

export default Search;
