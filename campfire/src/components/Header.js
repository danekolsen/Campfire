import React, { Component } from 'react'
import ActivityFeed from './ActivityFeed/ActivityFeed'
import Inbox from './Inbox/Inbox'
import Forum from './Forum/Forums'
import Profile from './Profile/Profile'
import Network from './Network/Network'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="indigo">
            <div  className="nav-wrapper container">
              <a href="#" className="brand-logo"> Campfire </a>
              <Link to="/"  style={logoStyle} className="brand-logo"> Campfire </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li> <Link to="/feed"> Activity Feed </Link> </li>
                <li> <Link to="/forum"> Forum </Link> </li>
                <li> <Link to="/network"> Network </Link> </li>
                <li> <Link to="/inbox"> Inbox <span class="new badge red accent-2">4</span> </Link> </li>
                <li> <Link to="/profile"> Profile </Link> </li>
                <li><a className='dropdown-trigger' href='#' data-target='dropdown1'><i className="material-icons">expand_more</i></a></li>
              </ul>
            </div>
            <ul id='dropdown1' className='dropdown-content'>
              <li><a href="#!">About Campfire</a></li>
              <li><a href="#!">Logout</a></li>
            </ul>

          </nav>

          <Route exact path="/feed" component={RenderActivityFeed} />
          <Route path="/forum" component={RenderForum} />
          <Route path="/network" component={RenderNetwork} />
          <Route path="/inbox" component={RenderInbox} />
          <Route path="/profile" component={RenderProfile} />
        </div>

      </Router>
    )
  }
}

function RenderActivityFeed() {
  return (
    <div className="container" >
      <ActivityFeed />
    </div>
  );
}

function RenderForum() {
  return (
    <div className="container" >
      <Forum />
    </div>
  );
}

function RenderNetwork() {
  return (
    <div className='container'>
      <div className="row">
        <Network />
      </div>
    </div>
  );
}

function RenderInbox(){
  return (
    <div className="container" >
      <Inbox />
    </div>
  );
}

function RenderProfile(){
  return (
    <div className="container" >
      <Profile />
    </div>
  );
}

const logoStyle = {
  fontFamily: 'Pacifico, cursive',
}

export default Header
