import React, { Component } from 'react';
import Search from './components/Search';
import RepoDetails from './components/RepoDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
        <RepoDetails/>
      </div>
    );
  }
}

export default App;
