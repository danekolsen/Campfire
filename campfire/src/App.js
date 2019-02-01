import React, { Component } from 'react';
import Header from './components/Header'
import Landing from './components/Landing/Landing'
import ActivityFeed from './components/ActivityFeed/ActivityFeed'
import Inbox from './components/Inbox/Inbox'


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
        <div style={app_style} className="App">
          <Landing />
        </div>
      )}
      else {
        return (
        <div style={app_style} className="App">
          <Header />
          {/* <div className="container" >
          <ActivityFeed />
          </div> */}
          {/* <div className='container'>
            <div className="row">
              <Network />
            </div>
          </div> */}
          <div className="container" >
            <Inbox />  
          </div>
        </div>
      );
    }
  }
}

const app_style={
  backgroundColor: '#BDBDBD',
  minHeight : '100vh',
}



export default App;
