import React, { Component } from 'react';

class Search extends Component {

  state = {
    userName: ''
  }

  onInputChange (userName) {

  }

  onUserClick(){
    console.log('hello')
  }

  render() {
    return (
      <div>
        <input 
          placeholder="Enter a GitHub User's name"
          value={this.state.userName}
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
