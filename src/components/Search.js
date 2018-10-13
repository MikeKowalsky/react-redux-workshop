import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from '../utils/request'
import { setBusy, storeResult } from '../actions/actions'

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
    console.log('click')
    console.log(this.state.userName)
    if(this.props.busy) {
      return
    }
    this.props.dispatch(setBusy(true))
    get(`https://github-user.now.sh?username=${this.state.userName}`)
    .then(data => {
      this.props.dispatch(setBusy(false))
      console.log(data)
      this.props.dispatch(storeResult(data.data))
    })
  }

  render() {
    return (
      <div>
        <div className='search-bar'>
          <input 
            placeholder="Enter a GitHub User's name"
            value={this.state.userName}
            onChange={event => this.onInputChange(event.target.value)}
            type='text'/>

          <button
            className={this.props.busy ? 'busy' : ''}
            disabled={this.props.busy}
            onClick={this.onUserClick}
            type='submit'>
            Search
          </button>
        </div>
          <div className='repo-list'>
            <h4>List of available repositories:</h4>
            <p>(click on any repo to visit on GitHub)</p>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    busy : state.home.busy,
  }
}

export default connect(mapStateToProps)(Search);
