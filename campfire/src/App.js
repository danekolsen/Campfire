import React, { Component } from 'react';
import Header from './components/Header'
import Landing from './components/Landing/Landing'

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
        </div>
      );
    }
  }
}

const app_style={
  backgroundColor: '#2fa59a',
  minHeight : '100vh',
}



export default App;
