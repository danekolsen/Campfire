import React, { Component } from 'react';
import Header from './components/Header'
import Landing from './components/Landing/Landing'
import ActivityFeed from './components/ActivityFeed/ActivityFeed'

import Network from './components/Network/Network'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn : true
    }
  }
  render() {
    if (this.state.loggedIn === false){
      return (
        <div style={app_style} className="App container">
          <Landing />
        </div>
      )}
      else {
        return (
        <div style={app_style} className="App container">

          <Network />
        </div>
      );
    }
  }
}

const app_style={
  backgroundColor: '#4D7F99',
  height : '90vh',
  // color : 'white'
}

export default App;
